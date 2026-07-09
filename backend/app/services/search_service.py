from tavily import TavilyClient

from app.config.settings import settings


class SearchService:
    def __init__(self):
        self.client = TavilyClient(api_key=settings.TAVILY_API_KEY)

    def search(self, query: str) -> str:
        result = self.client.search(
            query=query,
            search_depth="basic",
            max_results=5,
        )

        if not result.get("results"):
            return ""

        text = ""

        for item in result["results"]:
            text += f"""
Title: {item['title']}
Content: {item['content']}
URL: {item['url']}

"""

        return text


search_service = SearchService()