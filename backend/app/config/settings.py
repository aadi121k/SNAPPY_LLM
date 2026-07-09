from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()


class Settings:
    APP_NAME = "SNAPPY LLM API"
    APP_VERSION = "1.0.0"

    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")

    DEFAULT_MODEL = "llama-3.3-70b-versatile"

    TEMPERATURE = 0.7

    MAX_TOKENS = 4096


settings = Settings()