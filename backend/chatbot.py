from langchain.llms import OpenAI
from langchain.chains.question_answering import load_qa_chain 

class ChatBot:
    def __init__(self):
        self.chain = load_qa_chain(llm=OpenAI())
        
    def upload_documents(self, documents):
     self.documents = documents
        
    def get_response(self, query):
        response = self.chain.run(input_documents=self.documents, question=query)
        return response
        
  