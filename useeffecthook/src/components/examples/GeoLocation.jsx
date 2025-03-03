import React, { useState, useEffect } from "react";

const GeoLocation = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const success = (position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    const failure = (err) => {
      setError(err.message);
    };

    navigator.geolocation.getCurrentPosition(success, failure);
  }, []);

  return (
    <div>
      <h2>Geolocation Example</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>
          Latitude: {location.lat} <br />
          Longitude: {location.lon}
        </p>
      )}
    </div>
  );
};

export default GeoLocation;
