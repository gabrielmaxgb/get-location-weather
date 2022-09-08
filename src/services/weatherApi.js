export const getUsersClientAddress = async (userLocation, setGetAddressLoading, setUserAddress) => {
  console.log("getting address");
  if (userLocation) {
    setGetAddressLoading(true);
    await fetch(`${process.env.REACT_APP_LOCATION_API}&lat=${userLocation.lat}&lon=${userLocation.lon}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setUserAddress(data);
      })
      .catch(error => console.log("Error", error))
      .finally(() => setGetAddressLoading(false));
  }
  return;
};

export const getWeatherByLocation = async (userLocation, setGetWeatherLoading, setLocalWeather) => {
  console.log("getting weather");
  if (userLocation) {
    setGetWeatherLoading(true)
    await fetch(`${process.env.REACT_APP_WEATHER_API}&lat=${userLocation.lat}&lon=${userLocation.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setLocalWeather(data);
      })
      .catch(error => console.log("Error", error))
      .finally(() => setGetWeatherLoading(false));
  }
  return;
};