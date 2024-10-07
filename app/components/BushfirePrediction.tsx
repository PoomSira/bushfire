import { useState, ChangeEvent, FormEvent } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// Define types for form data and API response
interface FormData {
  Station_Region: number;
  Temps_Min: number;
  Temps_Max: number;
  Rain: number;
  AM9_RH: number;
  AM9_Spd: number;
  PM3_RH: number;
}

interface PredictionResponse {
  prediction: number;
  probability: number[]; // Assuming probability is returned as an array
}

// Marks for sliders
const stationMarks = [
  { value: 1, label: "1" },
  { value: 10, label: "10" },
];

const tempMarks = [
  { value: 0, label: "0°C" },
  { value: 25, label: "25°C" },
  { value: 50, label: "50°C" },
];

const humidityMarks = [
  { value: 0, label: "0%" },
  { value: 50, label: "50%" },
  { value: 100, label: "100%" },
];

const rainLevelMark = [
  { value: 0, label: "0 mm" },
  { value: 25, label: "25 mm" },
  { value: 50, label: "50 mm" },
];

const windSpeedMark = [
  { value: 0, label: "0 km/h" },
  { value: 25, label: "25 km/h" },
  { value: 50, label: "50 km/h" },
];

const valuetext = (value: number) => {
  return `${value}°C`;
};

export default function BushfirePrediction() {
  const [formData, setFormData] = useState<FormData>({
    Station_Region: 5,
    Temps_Min: 9.2,
    Temps_Max: 20.7,
    Rain: 0.2,
    AM9_RH: 61.0,
    AM9_Spd: 6.0,
    PM3_RH: 61.0,
  });

  const [prediction, setPrediction] = useState<number | null>(null);
  const [probability, setProbability] = useState<number[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle slider input changes for Material UI sliders
  const handleSliderChange =
    (name: keyof FormData) => (event: Event, value: number | number[]) => {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value as number,
      }));
    };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPrediction(null);
    setProbability(null);

    try {
      const response = await fetch(
        "https://api-ml-bushfire-0a5c00156d93.herokuapp.com/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result: PredictionResponse = await response.json();
      setPrediction(result.prediction);
      setProbability(result.probability);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-12 bg-[#FFFBF2] rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">
        Predict Bushfire Risk
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-6 justify-items-center items-center">
          <div>
            <label className="block font-semibold text-black">
              Station Region: {formData.Station_Region}
            </label>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Station Region"
                value={formData.Station_Region}
                min={1}
                max={10}
                step={1}
                marks={stationMarks}
                valueLabelDisplay="auto"
                onChange={handleSliderChange("Station_Region")}
                sx={{
                  width: 300,
                  color: "orange", // Use the color name 'orange'
                  "& .MuiSlider-thumb": {
                    color: "orange", // Change thumb color to orange
                  },
                  "& .MuiSlider-track": {
                    color: "orange", // Change track color to orange
                  },
                  "& .MuiSlider-rail": {
                    color: "#ffcc80", // Optionally change the rail color to a lighter orange
                  },
                }}
              />
            </Box>
          </div>
          <div>
            <label className="block font-semibold text-black">
              Min Temperature (°C): {formData.Temps_Min}
            </label>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Min Temperature"
                value={formData.Temps_Min}
                min={0}
                max={50}
                step={0.1}
                marks={tempMarks}
                valueLabelDisplay="auto"
                onChange={handleSliderChange("Temps_Min")}
                sx={{
                  width: 300,
                  color: "orange", // Use the color name 'orange'
                  "& .MuiSlider-thumb": {
                    color: "orange", // Change thumb color to orange
                  },
                  "& .MuiSlider-track": {
                    color: "orange", // Change track color to orange
                  },
                  "& .MuiSlider-rail": {
                    color: "#ffcc80", // Optionally change the rail color to a lighter orange
                  },
                }}
              />
            </Box>
          </div>
          <div>
            <label className="block font-semibold text-black">
              Max Temperature (°C): {formData.Temps_Max}
            </label>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Max Temperature"
                value={formData.Temps_Max}
                min={0}
                max={50}
                step={0.1}
                marks={tempMarks}
                valueLabelDisplay="auto"
                onChange={handleSliderChange("Temps_Max")}
                sx={{
                  width: 300,
                  color: "orange", // Use the color name 'orange'
                  "& .MuiSlider-thumb": {
                    color: "orange", // Change thumb color to orange
                  },
                  "& .MuiSlider-track": {
                    color: "orange", // Change track color to orange
                  },
                  "& .MuiSlider-rail": {
                    color: "#ffcc80", // Optionally change the rail color to a lighter orange
                  },
                }}
              />
            </Box>
          </div>
          <div>
            <label className="block font-semibold text-black">
              Rain (mm): {formData.Rain}
            </label>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Rain"
                value={formData.Rain}
                min={0}
                max={50}
                step={0.1}
                marks={rainLevelMark}
                valueLabelDisplay="auto"
                onChange={handleSliderChange("Rain")}
                sx={{
                  width: 300,
                  color: "orange", // Use the color name 'orange'
                  "& .MuiSlider-thumb": {
                    color: "orange", // Change thumb color to orange
                  },
                  "& .MuiSlider-track": {
                    color: "orange", // Change track color to orange
                  },
                  "& .MuiSlider-rail": {
                    color: "#ffcc80", // Optionally change the rail color to a lighter orange
                  },
                }}
              />
            </Box>
          </div>
          <div>
            <label className="block font-semibold text-black">
              9AM Humidity (%): {formData.AM9_RH}
            </label>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="9AM Humidity"
                value={formData.AM9_RH}
                min={0}
                max={100}
                step={1}
                marks={humidityMarks}
                valueLabelDisplay="auto"
                onChange={handleSliderChange("AM9_RH")}
                sx={{
                  width: 300,
                  color: "orange", // Use the color name 'orange'
                  "& .MuiSlider-thumb": {
                    color: "orange", // Change thumb color to orange
                  },
                  "& .MuiSlider-track": {
                    color: "orange", // Change track color to orange
                  },
                  "& .MuiSlider-rail": {
                    color: "#ffcc80", // Optionally change the rail color to a lighter orange
                  },
                }}
              />
            </Box>
          </div>
          <div>
            <label className="block font-semibold text-black">
              9AM Wind Speed (km/h): {formData.AM9_Spd}
            </label>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="9AM Wind Speed"
                value={formData.AM9_Spd}
                min={0}
                max={50}
                step={0.1}
                marks={windSpeedMark}
                valueLabelDisplay="auto"
                onChange={handleSliderChange("AM9_Spd")}
                sx={{
                  width: 300,
                  color: "orange", // Use the color name 'orange'
                  "& .MuiSlider-thumb": {
                    color: "orange", // Change thumb color to orange
                  },
                  "& .MuiSlider-track": {
                    color: "orange", // Change track color to orange
                  },
                  "& .MuiSlider-rail": {
                    color: "#ffcc80", // Optionally change the rail color to a lighter orange
                  },
                }}
              />
            </Box>
          </div>
          <div>
            <label className="block font-semibold text-black">
              3PM Humidity (%): {formData.PM3_RH}
            </label>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="3PM Humidity"
                value={formData.PM3_RH}
                min={0}
                max={100}
                step={1}
                marks={humidityMarks}
                valueLabelDisplay="auto"
                onChange={handleSliderChange("PM3_RH")}
                sx={{
                  width: 300,
                  color: "orange", // Use the color name 'orange'
                  "& .MuiSlider-thumb": {
                    color: "orange", // Change thumb color to orange
                  },
                  "& .MuiSlider-track": {
                    color: "orange", // Change track color to orange
                  },
                  "& .MuiSlider-rail": {
                    color: "#ffcc80", // Optionally change the rail color to a lighter orange
                  },
                }}
              />
            </Box>
          </div>
        </div>
        {/* Centered Predict Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 w-1/3"
          >
            Predict
          </button>
        </div>
      </form>

      {/* Centered Prediction Results */}
      <div className="flex flex-col items-center mt-6">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* {prediction !== null && (
          <p className="text-center">Prediction: {prediction}</p>
        )} */}

        {probability !== null && Array.isArray(probability[0]) && (
          <div className="text-center text-3xl font-bold w-2/3">
            {/* Calculate the probability percentage */}
            {/* <span>{(probability[0][1] * 100).toFixed(2)}%</span> */}

            {/* Check if the probability is less than 50% */}
            {probability[0][1] * 100 < 50 ? (
              <p className="text-orange-400 mt-4">
                <strong>LOW BUSHFIRE RISK!</strong> Under this weather
                condition, there is a{" "}
                <span className="text-4xl font-extrabold">
                  {(probability[0][1] * 100).toFixed(2)}%
                </span>
                probability that a bushfire is likely to occur.
              </p>
            ) : (
              <p className="text-red-500 mt-4">
                <strong>HIGH BUSHFIRE RISK!</strong> Under this weather
                condition, there is a{" "}
                <span className="text-4xl font-extrabold">
                  {(probability[0][1] * 100).toFixed(2)} %
                </span>
                probability that a bushfire is likely to occur.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
