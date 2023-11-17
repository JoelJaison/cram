from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


class MongoClient:
    uri = "mongodb+srv://joeljaison13:password@cram.ydstmcl.mongodb.net/?retryWrites=true&w=majority"
    def __init__(self):
        self.client = MongoClient(self.uri, server_api=ServerApi('1'))

    def create_user():
        pass

    def get_user():
        pass

    def upload_document(user_id):
        pass
