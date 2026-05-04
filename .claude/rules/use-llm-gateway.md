---
name: use-llm-gateway
description: Configure and use the SIXT LLM Gateway (LiteLLM proxy) with correct auth, model selection, and retry handling.
---

When connecting to an LLM model (GPT, Claude, Gemini, etc.) is requested, follow these rules:

---

## Base URL

https://llm.orange.sixt.com

---

## API Key / Authentication

**Experimentation & local development:**
Read the key from the environment variable `LLM_GW_API_KEY`. Never hardcode API keys.

```python
import os
api_key = os.environ["LLM_GW_API_KEY"]
```

**Production services:**
Retrieve the API key via the GoOrange Configuration Service at runtime. Do not use environment variables for production deployments. Never hardcode API keys.

To obtain a production service account key, contact **#team_pie** or **#team_ds_genai** on Slack and prepare the following:

- Use case description (max 200 words) *(required)*
- Target LLM model(s) *(required)*
- Estimated budget in USD (monthly/weekly/daily) *(required)*
- Token per Minute (TPM) and Request per Minute (RPM) estimates *(required)*
- Whether request logging should be disabled (default: all requests are logged) *(optional)*
- Additional guardrails beyond provider defaults *(optional)*
- Fallback models for outages/rate limits *(optional)*

Production keys are re-reviewed every 6 months. Full process: https://sixt-cloud.atlassian.net/wiki/spaces/GOOR/pages/344752147/How+to+use+LLM+Gateway#Phase-3:-Product-Development-towards-Production-&-Re-review

---

## Docs

https://docs.litellm.ai/docs/supported_endpoints

---

## Available Models

Fetch the current list at `https://llm.orange.sixt.com/v1/models` or browse with costs at `https://llm.orange.sixt.com/ui/model_hub_table/`. The table below reflects the known set as of 2026-03-21 — always prefer the live endpoint for accuracy.

---

## Cost-Conscious Testing

Personal keys (Phase 1/2) have a **$20/week budget** and **expire after 30 days**. When writing or running tests against the LLM Gateway:

- **Use a Tier 1 model** (e.g. `azure/gpt-5-nano`, `claude-haiku-4.5`) for tests unless the test specifically validates Tier 2/3 behavior.
- **Use small, representative samples** — never pass full datasets through an LLM in tests. Truncate or mock large inputs; a few examples are sufficient to verify correctness.
- **Set `max_tokens` low** in tests (e.g. 64–256) to cap per-call cost.
- **Cache or mock LLM responses** in unit tests wherever the goal is to test surrounding logic, not the model itself. Only call the live gateway in integration tests.
- **Avoid loops without guards** — ensure test loops have strict iteration caps to prevent runaway token spend.
- **Prefer `ollama/deepseek-r1:1.5b`** for offline/free-tier smoke tests where model quality is not being evaluated.

---

## Rate Limits & Retry Handling

All models are rate-limited by tokens and requests per minute. Personal keys additionally have a hard weekly budget cap — exceeding it blocks the key until the budget resets.

**Error handling by status code:**

| Code | Meaning | Action |
|---|---|---|
| `429` | Rate limit (TPM/RPM) or budget exceeded | Retry with exponential backoff + jitter: `wait = min(2^n + random(0, 1), 60)` s. Max 3 retries. Honor `Retry-After` header if present. |
| `401` / `403` | Invalid or expired key | Fail fast — do not retry. Check `LLM_GW_API_KEY` is set and the key has not expired or hit its budget. |
| `500` / `502` / `503` / `504` | Gateway or upstream error | Retry with backoff (same policy as `429`). |

**Parallel requests:**

- **Testing:** cap concurrency at 5 parallel requests to avoid burning through personal key budget.
- **Large dataset analysis or production workloads:** scale concurrency based on the TPM and RPM limits of the key in use. Stay within those limits by throttling with a semaphore or token-bucket. If the limits are unknown, ask the user before proceeding.
- **When in doubt** about the appropriate concurrency level, ask the user for guidance.

- Always set an explicit timeout (recommended: 30–120 s depending on model tier). LLM calls, especially Tier 3 models, can be slow and will hang indefinitely without a timeout.

---

## Usage Example (Python)

```python
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://llm.orange.sixt.com/v1",
    api_key=os.environ["LLM_GW_API_KEY"],
    timeout=60,  # seconds — always set; Tier 3 models can be slow
)

response = client.chat.completions.create(
    model="claude-sonnet-4.6",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Summarize the key features of the SIXT LLM Gateway."},
    ],
    max_tokens=1024,
)

print(response.choices[0].message.content)
```

For more examples across languages (Go, Java, TypeScript, C++, Agent SDKs):
👉 https://github.com/Sixt/com.sixt.tool.llm-gateway-examples

---

## Model Selection

Use this guide to select the appropriate model based on task complexity, latency, and cost.

### Tier 1 — Fast & Cost-Efficient

Use for high-volume, latency-sensitive, or cost-constrained tasks.

| Model | Best for |
|---|---|
| `claude-haiku-4.5` | Simple Q&A, intent classification, routing, short summarization, streaming, high-throughput pipelines |
| `azure/gpt-5-mini` | Lightweight extraction, structured output (JSON/CSV), keyword tagging, quick rewrites |
| `azure/gpt-5-nano` | Ultra-low-cost tasks, minimal reasoning required |
| `vertex_ai/gemini-3-flash` | Multimodal quick tasks (image + text), real-time user-facing responses |
| `vertex_ai/gemini-2.0-flash` | Fast multimodal tasks with a stable Gemini 2.x release |
| `vertex_ai/gemini-2.0-flash-lite` | Cheapest Gemini option for simple multimodal tasks |
| `ollama/deepseek-r1:1.5b` | Lightweight inference via Ollama backend, minimal cost, simple reasoning |

### Tier 2 — Balanced (Recommended Default)

Use for most production workloads. Good balance of quality, speed, and cost.

| Model | Best for |
|---|---|
| `claude-sonnet-4.6` | RAG pipelines, code generation, moderate reasoning, report drafting, agentic subtasks |
| `azure/gpt-5` | General-purpose GPT tasks, broad world knowledge, tool use |
| `vertex_ai/gemini-3-pro` | Long-context document analysis, multimodal reasoning (PDF, image, video), multilingual tasks |
| `vertex_ai/gemini-2.5-flash` | Long-context multimodal tasks with strong reasoning at moderate cost |

### Tier 3 — Maximum Capability

Use when quality is critical and task complexity is high. Reserve intentionally due to cost. Ensure budget is approved before using Tier 3 models in production — they cost significantly more than Tier 1/2.

| Model | Best for |
|---|---|
| `claude-opus-4.6` | Complex agentic workflows, multi-step reasoning, nuanced writing, long-horizon planning |
| `azure/gpt-5.1` | Advanced coding with full repo understanding, complex tool use, research synthesis |
| `vertex_ai/gemini-2.5-pro` | Highest-quality multimodal reasoning, very large context windows |
| `vertex_ai/gemini-3-pro-image` | Image generation or image-heavy multimodal tasks |

### Embeddings

| Model | Notes |
|---|---|
| `text-embedding-3-large` | Default choice for embeddings |
| `azure/text-embedding-3-large` | Same model, Azure backend |
| `bedrock/titan-embed-text-v2` | AWS Bedrock backend |

### Specialty

| Model | Notes |
|---|---|
| `mistral-ocr` | Document OCR and parsing |
| `ollama/deepseek-r1:1.5b` | Lightweight inference via Ollama backend |

---

## Selection Rules

- Default to `claude-sonnet-4.6` unless there is a clear reason to go up or down in tier.
- Use Tier 1 for repetitive, simple, or latency-sensitive tasks.
- Use Tier 3 only when Tier 2 produces insufficient quality — and only with budget approval.
- Prefer `vertex_ai/*` models when the input is multimodal or the context window is very large.
- Prefer `claude-*` models for instruction-following, structured outputs, and agentic task execution.
- Prefer `azure/*` models for GPT-based tasks or when Azure routing is preferred.
- All Claude and GPT models are available under multiple cloud backends (`bedrock/`, `vertex_ai/`, `azure/`, bare name). Use the bare name unless you need to pin to a specific cloud provider.

---

## Full Model List (as of 2026-03-21)

Always verify currency at https://llm.orange.sixt.com/v1/models

```
# Claude (bare — routes via default backend)
claude-haiku-4.5
claude-sonnet-4.5
claude-sonnet-4.6
claude-opus-4.5
claude-opus-4.6

# Claude via AWS Bedrock
bedrock/claude-haiku-4.5
bedrock/claude-sonnet-4.5
bedrock/claude-sonnet-4.6
bedrock/claude-opus-4.5
bedrock/claude-opus-4.6
bedrock/claude-sonnet-4

# Claude via Google Vertex AI
vertex_ai/claude-haiku-4.5
vertex_ai/claude-sonnet-4.5
vertex_ai/claude-sonnet-4.6
vertex_ai/claude-opus-4.5
vertex_ai/claude-opus-4.6

# GPT (bare — routes via default backend)
gpt-4o
gpt-4o-mini
gpt-4.1
gpt-4.1-mini
gpt-5
gpt-5-mini
gpt-5-nano
gpt-5.1

# GPT via Azure
azure/gpt-4o
azure/gpt-4o-mini
azure/gpt-4.1
azure/gpt-4.1-mini
azure/gpt-5
azure/gpt-5-mini
azure/gpt-5-nano
azure/gpt-5.1

# Batch variants
gpt-4o-batch
gpt-4.1-batch
gpt-4.1-mini-batch
azure/gpt-4o-batch
azure/gpt-4.1-batch
azure/gpt-4.1-mini-batch

# Gemini via Vertex AI
vertex_ai/gemini-2.0-flash
vertex_ai/gemini-2.0-flash-lite
vertex_ai/gemini-2.5-flash
vertex_ai/gemini-2.5-pro
vertex_ai/gemini-3-flash
vertex_ai/gemini-3-pro
vertex_ai/gemini-3-pro-image

# Embeddings
text-embedding-3-large
azure/text-embedding-3-large
bedrock/titan-embed-text-v2
ollama/nomic-embed-text:v1.5

# Specialty
mistral-ocr
ollama/deepseek-r1:1.5b
```
