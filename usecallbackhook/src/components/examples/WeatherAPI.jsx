import React, { useState, useCallback } from "react";

const WeatherAPI = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const API_KEY = "c6ada7f661225a11f4dda59a0a8f1024"; // Replace with your OpenWeather API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [city]);

  return (
    <div>
      <h2>Weather Search</h2>
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}>
          <h3>Weather in {weatherData?.name || "Loading"}</h3>
          <p>
            <strong>Temperature:</strong>{" "}
            {weatherData.main?.temp || "Not Found"}°C
          </p>
          <p>
            <strong>Condition:</strong>{" "}
            {weatherData.weather[0]?.description || "Not Found"}
          </p>
          <p>
            <strong>Humidity:</strong>{" "}
            {weatherData.main?.humidity || "Not Found"}%
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherAPI;