from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pickle
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

# Load the machine learning model
try:
    model = pickle.load(open('BB_random_forest_model.pkl', 'rb'))
    if not hasattr(model, 'predict'):
        raise ValueError("Loaded object is not a valid model.")
except Exception as e:
    raise HTTPException(status_code=500, detail=f"Error loading model: {str(e)}")

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    # allow_origins=["http://localhost:3000"],  # Your frontend URL
    allow_origins=["https://www.bushfire-brigade.me"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Define input data model
class InputData(BaseModel):
    Station_Region: int
    Temps_Min: float
    Temps_Max: float
    Rain: float
    AM9_RH: int
    AM9_Spd: int

@app.get("/")
async def read_root():
    return {"message": "Welcome to the FastAPI ML Model API!!!!"}

@app.post("/predict")
async def predict(data: InputData):
    # Prepare input data for the model
    input_data = [[
        data.Station_Region, 
        data.Temps_Min, 
        data.Temps_Max, 
        data.Rain, 
        data.AM9_RH, 
        data.AM9_Spd
    ]]

    # Get prediction
    try:
        prediction = model.predict(input_data)
        # Convert the numpy.int64 output to a native Python int
        prediction_value = int(prediction[0])
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")
    
    return {"prediction": prediction_value}

# Create a Mangum handler for AWS Lambda (this is what Vercel's serverless function uses)
handler = Mangum(app)
