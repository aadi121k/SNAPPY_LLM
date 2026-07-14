import requests


class WikimediaService:
    BASE_URL = "https://commons.wikimedia.org/w/api.php"

    def search_images(self, query: str, limit: int = 3):

        headers = {
            "User-Agent": "SnappyAI/1.0 (aadikumar311@gmail.com)"
        }

        params = {
            "action": "query",
            "generator": "search",
            "gsrsearch": query,
            "gsrnamespace": 6,
            "gsrlimit": limit,
            "prop": "imageinfo",
            "iiprop": "url",
            "format": "json",
            "origin": "*",
        }

        try:
            response = requests.get(
                self.BASE_URL,
                headers=headers,
                params=params,
                timeout=10,
            )

            response.raise_for_status()

            data = response.json()

            pages = data.get("query", {}).get("pages", {})

            images = []

            for page in pages.values():

                image_info = page.get("imageinfo")

                if not image_info:
                    continue

                images.append(
                    {
                        "title": page.get("title", "").replace("File:", ""),
                        "image": image_info[0]["url"],
                        "author": "Wikimedia Commons",
                        "link": image_info[0]["descriptionurl"],
                    }
                )

            return images

        except Exception as e:
            print("Wikimedia Error:", e)
            return []


wikimedia_service = WikimediaService()