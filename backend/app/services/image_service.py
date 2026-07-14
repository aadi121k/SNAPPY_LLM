from app.services.unsplash_service import unsplash_service
from app.services.wikimedia_service import wikimedia_service
from app.services.image_classifier import image_classifier


class ImageService:

    def get_images(self, query: str):

        lower = query.lower().strip()

        # ---------------------------------------
        # Creator
        # ---------------------------------------

        creator_keywords = [
            "who built you",
            "who created you",
            "who made you",
            "who is your creator",
            "who is aditya kumar upadhyay",
            "tell me about aditya kumar upadhyay",
            "about aditya kumar upadhyay",
        ]

        if any(k in lower for k in creator_keywords):
            return [
                {
                    "title": "Aditya Kumar Upadhyay",
                    "image": "http://localhost:8000/static/creator.jpg",
                    "author": "Aditya Kumar Upadhyay",
                    "link": "https://linkedin.com/in/adityaupadhyay5k",
                }
            ]

        image_type = image_classifier.classify(query)

        # ---------------------------------------
        # Person / Place
        # ---------------------------------------

        if image_type in ["person", "place"]:
            images = wikimedia_service.search_images(query)

            if images:
                return images

        # ---------------------------------------
        # Objects / Animals
        # ---------------------------------------

        if image_type == "object":
            return unsplash_service.search_images(query)

        # ---------------------------------------
        # No image
        # ---------------------------------------

        return []


image_service = ImageService()