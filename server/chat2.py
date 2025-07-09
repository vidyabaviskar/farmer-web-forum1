from langchain_together import Together
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

# Initialize the language model
llm = Together(
    model="mistralai/Mistral-7B-Instruct-v0.1",
    max_tokens=512,
    temperature=0.1,
    top_k=1,
    together_api_key="tgp_v1_gQKElz-fG0ha0jAhLp2QWj3vZX4rLpkzfoRa5hffkSs"
)

# Set up the retrieval QA chain
def setup_retrieval_qa(db):
    retriever = db.as_retriever(similarity_score_threshold=0.6)

    # Define the prompt template
    prompt_template = """ Your name is Krishi AI, Please answer questions related to Agriculture. Try explaining in simple words. Answer in less than 100 words. If you don't know the answer, simply respond with 'Don't know.'
     CONTEXT: {context}
     QUESTION: {question}"""

    PROMPT = PromptTemplate(template=f"[INST] {prompt_template} [/INST]", input_variables=["context", "question"])

    # Initialize the RetrievalQA chain
    chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type='stuff',
        retriever=retriever,
        input_key='query',
        return_source_documents=True,
        chain_type_kwargs={"prompt": PROMPT},
        verbose=True
    )
    return chain
