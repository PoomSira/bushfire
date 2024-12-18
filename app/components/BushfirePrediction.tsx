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
  { value: 0, label: "0" },
  { value: 5, label: "5" },
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
  const [progress, setProgress] = useState<number>(0);

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
    setProgress(0);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 90) {
            clearInterval(progressInterval);
            return prevProgress;
          }
          return prevProgress + 10;
        });
      }, 200);

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

      clearInterval(progressInterval);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result: PredictionResponse = await response.json();
      setPrediction(result.prediction);
      setProbability(result.probability);
      setProgress(100);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
      setTimeout(() => setProgress(0), 1000); // Reset progress after 1 second
    }
  };

  return (
    <div className="p-12 bg-[#FFFBF2] rounded-lg">
      <h1 className="text-2xl text-gray-800 font-bold mb-6 text-center">
        Bushfire Predictor
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-6 justify-items-center items-center">
          {/* Station Region */}
          <div>
            <div className="flex items-center space-x-2">
              <label className="block font-semibold text-black">
                Station Region:{" "}
                {formData.Station_Region === 0
                  ? "0 (ALBURY)"
                  : formData.Station_Region === 1
                  ? "1 (BENALLA)"
                  : formData.Station_Region === 2
                  ? "2 (CARRYONG)"
                  : formData.Station_Region === 3
                  ? "3 (EDI UPPER)"
                  : formData.Station_Region === 4
                  ? "4 (FALLS CREEK)"
                  : formData.Station_Region === 5
                  ? "5 (HUNTERS HILL)"
                  : formData.Station_Region === 6
                  ? "6 (MOUNT BULLER)"
                  : formData.Station_Region === 7
                  ? "7 (RUTHERGLEN)"
                  : formData.Station_Region === 8
                  ? "8 (SHEPPARTON)"
                  : formData.Station_Region === 9
                  ? "9 (WANGARATTA)"
                  : formData.Station_Region === 10
                  ? "10 (YARRAWONGA)"
                  : "Unknown Region"}
              </label>
              <div className="relative group">
                <span className=" bg-orange-400 text-white border rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                  ?
                </span>
                <div className="absolute left-0 bottom-6 transform translate-y-full hidden group-hover:block bg-gray-700 text-white text-xs rounded-md py-2 px-3 w-40 z-10">
                  Station Region: Where we measure the weather.
                </div>
              </div>
            </div>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Station Region"
                value={formData.Station_Region}
                min={0}
                max={10}
                step={1}
                marks={stationMarks}
                valueLabelDisplay="auto"
                onChange={handleSliderChange("Station_Region")}
                sx={{
                  width: 300,
                  color: "orange",
                  "& .MuiSlider-thumb": { color: "orange" },
                  "& .MuiSlider-track": { color: "orange" },
                  "& .MuiSlider-rail": { color: "#ffcc80" },
                }}
              />
            </Box>
          </div>

          {/* Min Temperature */}
          <div>
            <div className="flex items-center space-x-2">
              <label className="block font-semibold text-black">
                Min Temperature (°C): {formData.Temps_Min}
              </label>
              <div className="relative group">
                <span className=" bg-orange-400 text-white border rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                  ?
                </span>
                <div className="absolute left-0 bottom-6 transform translate-y-full hidden group-hover:block bg-gray-700 text-white text-xs rounded-md py-2 px-3 w-40 z-10">
                  Min Temperature: Lowest daily temp – cooler means less fire
                  risk.
                </div>
              </div>
            </div>
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
                  color: "orange",
                  "& .MuiSlider-thumb": { color: "orange" },
                  "& .MuiSlider-track": { color: "orange" },
                  "& .MuiSlider-rail": { color: "#ffcc80" },
                }}
              />
            </Box>
          </div>

          {/* Max Temperature */}
          <div>
            <div className="flex items-center space-x-2">
              <label className="block font-semibold text-black">
                Max Temperature (°C): {formData.Temps_Max}
              </label>
              <div className="relative group">
                <span className=" bg-orange-400 text-white border rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                  ?
                </span>
                <div className="absolute left-0 bottom-6 transform translate-y-full hidden group-hover:block bg-gray-700 text-white text-xs rounded-md py-2 px-3 w-40 z-10">
                  Max Temperature: Hottest temp – hot days dry plants, making
                  fires easier.
                </div>
              </div>
            </div>
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
                  color: "orange",
                  "& .MuiSlider-thumb": { color: "orange" },
                  "& .MuiSlider-track": { color: "orange" },
                  "& .MuiSlider-rail": { color: "#ffcc80" },
                }}
              />
            </Box>
          </div>

          {/* Rain */}
          <div>
            <div className="flex items-center space-x-2">
              <label className="block font-semibold text-black">
                Rain (mm): {formData.Rain}
              </label>
              <div className="relative group">
                <span className=" bg-orange-400 text-white border rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                  ?
                </span>
                <div className="absolute left-0 bottom-6 transform translate-y-full hidden group-hover:block bg-gray-700 text-white text-xs rounded-md py-2 px-3 w-40 z-10">
                  Rain: Wet ground from rain stops fires; no rain dries plants
                </div>
              </div>
            </div>
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
                  color: "orange",
                  "& .MuiSlider-thumb": { color: "orange" },
                  "& .MuiSlider-track": { color: "orange" },
                  "& .MuiSlider-rail": { color: "#ffcc80" },
                }}
              />
            </Box>
          </div>

          {/* 9AM Humidity */}
          <div>
            <div className="flex items-center space-x-2">
              <label className="block font-semibold text-black">
                9AM Humidity (%): {formData.AM9_RH}
              </label>
              <div className="relative group">
                <span className=" bg-orange-400 text-white border rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                  ?
                </span>
                <div className="absolute left-0 bottom-6 transform translate-y-full hidden group-hover:block bg-gray-700 text-white text-xs rounded-md py-2 px-3 w-40 z-10">
                  9AM Humidity: Water in the air – more water, less fire risk
                </div>
              </div>
            </div>
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
                  color: "orange",
                  "& .MuiSlider-thumb": { color: "orange" },
                  "& .MuiSlider-track": { color: "orange" },
                  "& .MuiSlider-rail": { color: "#ffcc80" },
                }}
              />
            </Box>
          </div>

          {/* 9AM Wind Speed */}
          <div>
            <div className="flex items-center space-x-2">
              <label className="block font-semibold text-black">
                9AM Wind Speed (km/h): {formData.AM9_Spd}
              </label>
              <div className="relative group">
                <span className=" bg-orange-400 text-white border rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                  ?
                </span>
                <div className="absolute left-0 bottom-6 transform translate-y-full hidden group-hover:block bg-gray-700 text-white text-xs rounded-md py-2 px-3 w-40 z-10">
                  9AM Wind Speed: Strong winds spread fire faster.
                </div>
              </div>
            </div>
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
                  color: "orange",
                  "& .MuiSlider-thumb": { color: "orange" },
                  "& .MuiSlider-track": { color: "orange" },
                  "& .MuiSlider-rail": { color: "#ffcc80" },
                }}
              />
            </Box>
          </div>

          {/* 3PM Humidity */}
          <div>
            <div className="flex items-center space-x-2">
              <label className="block font-semibold text-black">
                3PM Humidity (%): {formData.PM3_RH}
              </label>
              <div className="relative group">
                <span className=" bg-orange-400 text-white border rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                  ?
                </span>
                <div className="absolute left-0 bottom-6 transform translate-y-full hidden group-hover:block bg-gray-700 text-white text-xs rounded-md py-2 px-3 w-40 z-10">
                  3PM Humidity: Afternoon air water – drier air means higher
                  fire risk.
                </div>
              </div>
            </div>
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
                  color: "orange",
                  "& .MuiSlider-thumb": { color: "orange" },
                  "& .MuiSlider-track": { color: "orange" },
                  "& .MuiSlider-rail": { color: "#ffcc80" },
                }}
              />
            </Box>
          </div>
        </div>

        {/* Predict Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 w-1/3 relative overflow-hidden"
            onClick={handleSubmit}
            disabled={loading}
          >
            <span className={`${loading ? "opacity-0" : "opacity-100"}`}>
              Predict
            </span>
            {loading && (
              <>
                <span className="absolute inset-0 flex items-center justify-center">
                  Predicting...
                </span>
                <div
                  className="absolute bottom-0 left-0 h-1 bg-green-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Prediction Results */}
      <div className="flex flex-col items-center mt-6">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {probability !== null && Array.isArray(probability[0]) && (
          <div className="text-center text-3xl font-bold w-2/3">
            {probability[0][1] * 100 >= 60 ? (
              <p className="text-red-500 mt-4">
                🚨 <strong>HIGH BUSHFIRE RISK!</strong> Under this weather
                condition, there is a{" "}
                <span className="text-4xl font-extrabold">
                  {(probability[0][1] * 100).toFixed(2)}%
                </span>{" "}
                probability that a bushfire is likely to occur.
              </p>
            ) : probability[0][1] * 100 >= 50 ? (
              <p className="text-yellow-500 mt-4">
                ⚠️ <strong>MEDIUM BUSHFIRE RISK!</strong> Under this weather
                condition, there is a{" "}
                <span className="text-4xl font-extrabold">
                  {(probability[0][1] * 100).toFixed(2)}%
                </span>{" "}
                probability that a bushfire is likely to occur.
              </p>
            ) : (
              <p className="text-green-500 mt-4">
                ✅ <strong>LOW BUSHFIRE RISK!</strong> Under this weather
                condition, there is a{" "}
                <span className="text-4xl font-extrabold">
                  {(probability[0][1] * 100).toFixed(2)}%
                </span>{" "}
                probability that a bushfire is likely to occur.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
