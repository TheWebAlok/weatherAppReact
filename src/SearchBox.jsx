import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "42bf0b939696d4ce3be6e48abcf01ad2";

  // Accept a city parameter (was using outer `city` before)
  let getWeatherInfo = async (cityName) => {
    try {
      const q = encodeURIComponent(cityName.trim());
      let response = await fetch(
        `${API_URL}?q=${q}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message || "Unable to fetch");
      }

      let result = {
        city: jsonResponse.name || cityName,
        temp: Math.round(jsonResponse.main.temp),
        tempMin: Math.round(jsonResponse.main.temp_min),
        tempMax: Math.round(jsonResponse.main.temp_max),
        humidity: jsonResponse.main.humidity,
        feelslike: Math.round(jsonResponse.main.feels_like),
        description: jsonResponse.weather?.[0]?.description || "",
      };

      setError(false);
      return result;
    } catch (err) {
      console.error("Error fetching weather data:", err.message);
      setError(true);
      return null;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
    if (error) setError(false);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    setError(false);

    const searchQuery = city.trim();
    if (!searchQuery) {
      setError(true);
      return;
    }

    // Clear input immediately (matching your desired UX)
    setCity("");

    const newInfo = await getWeatherInfo(searchQuery);
    if (newInfo) updateInfo(newInfo);
  };

  return (
    <div className="searchBox">
      <form className="searchForm" onSubmit={handleSubmit} noValidate>
        <TextField
          id="city-name"
          placeholder="Enter a City..."
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          className="search-input"
          InputProps={{
            notched: false,
            classes: { input: "search-input-inner" },
          }}
        />
<br />
        <Button
          variant="contained"
          type="submit"
          className="search-button"
          disableElevation
        >
          Search
        </Button>
      </form>

      {error && <p className="search-error">No such place exists!</p>}
    </div>
  );
}
