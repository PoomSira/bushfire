import { useState, ChangeEvent, FormEvent } from "react";

// Define types for form data
interface FormData {
  Station_Region: number;
  Temps_Min: string;
  Temps_Max: string;
  Rain: string;
  AM9_RH: string;
  AM9_Spd: string;
}

export default function Predict() {
  // State for form data, prediction result, loading, and error
  const [formData, setFormData] = useState<FormData>({
    Station_Region: 0,
    Temps_Min: "",
    Temps_Max: "",
    Rain: "",
    AM9_RH: "",
    AM9_Spd: "",
  });

  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://www.bushfire-brigade.me/api/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      //   const response = await fetch("/api/predict", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();
      setPrediction(result.prediction);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Predict Bushfire Risk</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Station Region: </label>
          <input
            type="number"
            name="Station_Region"
            value={formData.Station_Region}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Temps Min: </label>
          <input
            type="number"
            step="any"
            name="Temps_Min"
            value={formData.Temps_Min}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Temps Max: </label>
          <input
            type="number"
            step="any"
            name="Temps_Max"
            value={formData.Temps_Max}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Rain: </label>
          <input
            type="number"
            step="any"
            name="Rain"
            value={formData.Rain}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>AM9 RH: </label>
          <input
            type="number"
            name="AM9_RH"
            value={formData.AM9_RH}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>AM9 Spd: </label>
          <input
            type="number"
            name="AM9_Spd"
            value={formData.AM9_Spd}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Predict</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {prediction !== null && <p>Prediction: {prediction}</p>}
    </div>
  );
}
