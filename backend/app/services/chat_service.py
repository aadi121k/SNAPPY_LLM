from app.providers.groq_provider import groq_provider
from app.config.settings import settings


MODEL_MAP = {
    "llama-3.3": "llama-3.3-70b-versatile",

    # DeepSeek option temporarily mapped to Llama until we choose a new reasoning model
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

        # Smart Link Detection
        if lower.startswith("open "):
            site = lower.replace("open ", "").strip()

            if site in SMART_LINKS:
                return f"""# {site.title()}

Click the link below to open **{site.title()}**

🔗 {SMART_LINKS[site]}
"""

        groq_model = MODEL_MAP.get(
            model,
            settings.DEFAULT_MODEL,
        )

        response = self.client.chat.completions.create(
            model=groq_model,
            messages=[
               {
    "role": "system",
    "content": """
You are SNAPPY LLM, a modern AI assistant similar to ChatGPT.

Rules:
- Be helpful, accurate and concise.
- Answer directly whenever possible.
- Use Markdown formatting.
- Format code in fenced code blocks.
- If the user asks to open a website, provide its official URL.
- Never say 'I cannot open websites'. Instead provide the correct link.
- Do not unnecessarily tell users to search on another website.
- For general knowledge questions (e.g. Virat Kohli, Python, AI), answer directly from your knowledge.
- If a question requires live or very recent information, clearly state that live data may have changed and answer with the latest knowledge you have.
- Maintain a professional and friendly tone.
""",
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