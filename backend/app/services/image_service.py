from app.services.unsplash_service import unsplash_service
from app.services.wikimedia_service import wikimedia_service


class ImageService:

    def get_images(self, query: str):

        lower = query.lower()

        person_keywords = [
            "ronaldo",
            "messi",
            "mbappe",
            "virat",
            "kohli",
            "elon",
            "musk",
            "modi",
            "trump",
            "actor",
            "player",
            "footballer",
            "cricketer",
        ]

        if any(word in lower for word in person_keywords):
            images = wikimedia_service.search_images(query)

            if images:
                return images

        return unsplash_service.search_images(query)


image_service = ImageService()