from groq import Groq

from app.config.settings import settings


class GroqProvider:
    def __init__(self):
        self.client = Groq(
            api_key=settings.GROQ_API_KEY
        )

    def get_client(self):
        return self.client


groq_provider = GroqProvider()