import requests

from app.config.settings import settings


class UnsplashService:
    def __init__(self):
        self.base_url = "https://api.unsplash.com/search/photos"

    def search_images(self, query: str, per_page: int = 3):
        headers = {
            "Authorization": f"Client-ID {settings.UNSPLASH_ACCESS_KEY}"
        }

        params = {
            "query": query,
            "per_page": per_page,
            "orientation": "landscape",
        }

        response = requests.get(
            self.base_url,
            headers=headers,
            params=params,
            timeout=10,
        )

        response.raise_for_status()

        data = response.json()

        images = []

        for item in data.get("results", []):
            images.append(
                {
                    "title": item["alt_description"] or query,
                    "image": item["urls"]["regular"],
                    "author": item["user"]["name"],
                    "link": item["links"]["html"],
                }
            )

        return images


unsplash_service = UnsplashService()