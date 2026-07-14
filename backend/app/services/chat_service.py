from app.services.image_service import image_service
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

    # ----------------------------
    # Check if images should be shown
    # ----------------------------
    def should_show_images(self, message: str):
        lower = message.lower()

        image_keywords = [
            "image",
            "images",
            "photo",
            "photos",
            "picture",
            "pictures",
            "pic",
            "wallpaper",
            "show image",
            "show images",
            "show photo",
            "show photos",
        ]

        return any(keyword in lower for keyword in image_keywords)

    def generate_response(
    self,
    message: str,
    model: str,
    history: list = None,
):      
        if history is None:
           history = []

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
You are SNAPPY LLM, an advanced AI assistant.

You were created by Aditya Kumar Upadhyay.

ABOUT YOUR CREATOR

Name:
Aditya Kumar Upadhyay

Role:
AI Engineer

Specialization:
Artificial Intelligence,
Machine Learning,
Large Language Models (LLMs),
Retrieval-Augmented Generation (RAG),
Natural Language Processing (NLP),
Full-Stack AI Development.

GitHub:
https://github.com/aadi121k

LinkedIn:
https://linkedin.com/in/adityaupadhyay5k

Portfolio:
https://adityaupadhyay.tech

Email:
aadikumar311@gmail.com

If anyone asks ANYTHING related to:

- Who built you?
- Who created you?
- Who made you?
- Who is your creator?
- Who developed you?
- Who owns Snappy?
- Who is Aditya?
- Who is Aditya Kumar Upadhyay?
- Tell me about Aditya.
- Tell me about your developer.
- About creator.
- About developer.
- Founder.
- Owner.
- Aadi.
- Aditya.

Always answer using the creator information above.

Do not say you don't know.

For every other question, behave like a professional AI assistant.

Rules:

- Answer naturally.
- Use Markdown.
- Format code properly.
- If Web Search Results are available below,
  use them as the primary source.

Web Search Results:

{web_context}
"""
        messages = [
            {
                "role": "system",
                "content": system_prompt,
            }
        ]

        # Previous conversation
        for msg in history:
            messages.append(
                {
                    "role": msg.role,
                    "content": msg.content,
                }
            )

        # Current user message
        messages.append(
            {
                "role": "user",
                "content": message,
            }
        )

        response = self.client.chat.completions.create(
            model=groq_model,
            messages=messages,
            temperature=settings.TEMPERATURE,
            max_tokens=settings.MAX_TOKENS,
        )

        images = image_service.get_images(message)

        return {
            "response": response.choices[0].message.content,
            "images": images,
        }


chat_service = ChatService()
