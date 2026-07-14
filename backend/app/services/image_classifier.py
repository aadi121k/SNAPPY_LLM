import spacy

# Load model only once
nlp = spacy.load("en_core_web_sm")


class ImageClassifier:

    def classify(self, query: str):

        doc = nlp(query)

        # -----------------------------
        # Person
        # -----------------------------
        for ent in doc.ents:
            if ent.label_ == "PERSON":
                return "person"

        # -----------------------------
        # Places
        # -----------------------------
        for ent in doc.ents:
            if ent.label_ in [
                "GPE",
                "LOC",
                "FAC",
            ]:
                return "place"

        # -----------------------------
        # Objects / Animals
        # -----------------------------
        lower = query.lower()

        object_keywords = [
            "laptop",
            "phone",
            "iphone",
            "macbook",
            "car",
            "bike",
            "dog",
            "cat",
            "lion",
            "tiger",
            "flower",
            "tree",
            "moon",
            "sun",
            "earth",
        ]

        if any(word in lower for word in object_keywords):
            return "object"

        return "none"


image_classifier = ImageClassifier()