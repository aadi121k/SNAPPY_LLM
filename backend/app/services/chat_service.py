from app.providers.groq_provider import groq_provider
from app.config.settings import settings
from app.services.search_service import search_service


MODEL_MAP = {
    "llama-3.3": "llama-3.3-70b-versatile",
    "deepseek": "llama-3.3-70b-versatile",
    "kimi": "moonshotai/kimi-k2-instruct",
    "gemma": "gemma2-9b-it",
}


SMART_LINKS = {
    "youtube": "https://www.youtube.com",
    "github": "https://github.com",
    "google": "https://www.google.com",
    "linkedin": "https://www.linkedin.com",
    "leetcode": "https://leetcode.com",
    "gmail": "https://mail.google.com",
    "maps": "https://maps.google.com",
    "chatgpt": "https://chat.openai.com",
    "claude": "https://claude.ai",
    "grok": "https://grok.com",
    "stackoverflow": "https://stackoverflow.com",
    "huggingface": "https://huggingface.co",
    "kaggle": "https://kaggle.com",
}


class ChatService:
    def __init__(self):
        self.client = groq_provider.get_client()

    def generate_response(self, message: str, model: str):

        lower = message.lower().strip()

        # ----------------------------
        # Smart Website Opening
        # ----------------------------
        if lower.startswith("open "):
            site = lower.replace("open ", "").strip()

            if site in SMART_LINKS:
                return f"""# {site.title()}

Click below to open **{site.title()}**

🔗 {SMART_LINKS[site]}
"""

        # ----------------------------
        # Decide whether web search is required
        # ----------------------------
        search_keywords = [
            "latest",
            "today",
            "news",
            "current",
            "live",
            "score",
            "weather",
            "price",
            "stock",
            "recent",
            "update",
            "2026",
        ]

        web_context = ""

        if any(keyword in lower for keyword in search_keywords):
            try:
                web_context = search_service.search(message)
            except Exception as e:
                print("Search Error:", e)

        groq_model = MODEL_MAP.get(
            model,
            settings.DEFAULT_MODEL,
        )

        system_prompt = f"""
You are SNAPPY LLM.

You are a modern AI assistant similar to ChatGPT.

Rules:

- Answer naturally.
- Use Markdown.
- Format code properly.
- Never say you cannot browse the internet.
- If Web Search Results are available below,
  use them as the primary source.

Web Search Results:

{web_context}
"""

        response = self.client.chat.completions.create(
            model=groq_model,
            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": message,
                },
            ],
            temperature=settings.TEMPERATURE,
            max_tokens=settings.MAX_TOKENS,
        )

        return response.choices[0].message.content


chat_service = ChatService()