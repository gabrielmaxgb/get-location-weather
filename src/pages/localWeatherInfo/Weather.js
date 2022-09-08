import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import DefaultLoading from '../../components/defaultLoading/DefaultLoading';
import { getUsersClientAddress, getWeatherByLocation } from '../../services/weatherApi';
import { UpdateDataButton, WeatherPaper } from './WeatherStyles';

function Weather() {
  const [userLocation, setUserLocation] = React.useState();
  const [localWeather, setLocalWeather] = React.useState({});
  const [getWeatherLoading, setGetWeatherLoading] = React.useState(false);
  const [userAddress, setUserAddress] = React.useState({});
  const [getAddressLoading, setGetAddressLoading] = React.useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setUserLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  }, []);

  useEffect(() => {
    getUsersClientAddress(userLocation, setGetAddressLoading, setUserAddress);
    getWeatherByLocation(userLocation, setGetWeatherLoading, setLocalWeather)
  }, [userLocation]);

  const handleUpdateClick = () => {
    getUsersClientAddress(userLocation, setGetAddressLoading, setUserAddress);
    getWeatherByLocation(userLocation, setGetWeatherLoading, setLocalWeather);
  };

  return (
    <Grid as="section" container justifyContent="center" pt={6}>
      <Grid 
        as="div"
        item
        container
        alignItems="center"
        justifyContent="center"
        xs={11}
        sm={8}
        md={6}
      >
        {
          getAddressLoading && getWeatherLoading ? <DefaultLoading /> : (
            <>
              <WeatherPaper>
                <span>Address: <span>{`${userAddress[0]?.name}, ${userAddress[0]?.state} - ${userAddress[0]?.country}`}</span></span>
              </WeatherPaper>
              <WeatherPaper elevation={6}>
                <span>Weather: <span>{localWeather?.weather?.reduce((target, key, index) => {
                      target[index] = key;
                      return target;
                    }, {})[0].description}</span></span>
                <span>Temperature: <span>{localWeather?.main?.temp} °C</span></span>
                <span>Feels like: <span>{localWeather?.main?.feels_like} °C</span></span>
                <span>Max. Temp.: <span>{localWeather?.main?.temp_max} °C</span></span>
                <span>Min. Temp.: <span>{localWeather?.main?.temp_min} °C</span></span>
                <span>Humidity: <span>{localWeather?.main?.humidity} %</span></span>
                <span>Pressure: <span>{localWeather?.main?.pressure} hPa</span></span>
              </WeatherPaper>
              <UpdateDataButton 
                variant="contained" 
                onClick={() => handleUpdateClick()}
              >
                Update
              </UpdateDataButton>
            </>
          )
        }
      </Grid>
    </Grid>
  ); 
}

export default Weather;
