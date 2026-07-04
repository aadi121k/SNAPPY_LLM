from app.providers.groq_provider import groq_provider
from app.config.settings import settings


MODEL_MAP = {
    "llama-3.3": "llama-3.3-70b-versatile",
    "deepseek": "deepseek-r1-distill-llama-70b",
    "kimi": "moonshotai/kimi-k2-instruct",
    "gemma": "gemma2-9b-it",
}


class ChatService:
    def __init__(self):
        self.client = groq_provider.get_client()

    def generate_response(self, message: str, model: str):
        groq_model = MODEL_MAP.get(
            model,
            settings.DEFAULT_MODEL,
        )

        response = self.client.chat.completions.create(
            model=groq_model,
            messages=[
                {
                    "role": "user",
                    "content": message,
                }
            ],
            temperature=settings.TEMPERATURE,
            max_tokens=settings.MAX_TOKENS,
        )

        return response.choices[0].message.content


chat_service = ChatService()