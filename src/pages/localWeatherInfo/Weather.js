import { Grid } from '@mui/material'
import React, { useCallback, useEffect } from 'react'
import DefaultLoading from '../../components/defaultLoading/DefaultLoading';
import { getUsersClientAddress, getWeatherByLocation } from '../../services/weatherApi';
import { UpdateDataButton, WeatherPaper } from './WeatherStyles';

const getUsersClientLocation = (setGeolocationAvailability, setUserLocation) => {
  if ("geolocation" in navigator) {
    setGeolocationAvailability(true);
    navigator.geolocation.getCurrentPosition(function(position) {
      const locationInfo = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      setUserLocation(locationInfo);
    });
    return;
  } else {
    setGeolocationAvailability(false);
    return;
  }
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   const locationInfo = {
  //     lat: position.coords.latitude,
  //     lon: position.coords.longitude,
  //   };
  //   setUserLocation(locationInfo);
  // });
};

// const getUsersClientAddress = async (userLocation, setGetAddressLoading, setUserAddress) => {
//     if (userLocation) {
//       setGetAddressLoading(true);
//       await fetch(`${process.env.REACT_APP_LOCATION_API}&lat=${userLocation.lat}&lon=${userLocation.lon}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
//         .then(res => res.json())
//         .then(data => {
//           setUserAddress(data);
//           // setGetAddressLoading(false);
//         })
//         .catch(error => console.log("Error", error))
//         .finally(() => setGetAddressLoading(false));
//     }
//     return;
// };

// const getWeatherByLocation = async (userLocation, setGetWeatherLoading, setLocalWeather) => {
//     if (userLocation) {
//       setGetWeatherLoading(true)
//       await fetch(`${process.env.REACT_APP_WEATHER_API}&lat=${userLocation.lat}&lon=${userLocation.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
//         .then(res => res.json())
//         .then(data => {
//           setLocalWeather(data);
//           // setGetWeatherLoading(false);
//         })
//         .catch(error => console.log("Error", error))
//         .finally(() => setGetWeatherLoading(false));
//     }
//     return;
// };

function Weather() {
  const [userLocation, setUserLocation] = React.useState();
  const [localWeather, setLocalWeather] = React.useState({});
  const [getWeatherLoading, setGetWeatherLoading] = React.useState(false);
  const [userAddress, setUserAddress] = React.useState({});
  const [getAddressLoading, setGetAddressLoading] = React.useState(false);

  // useEffect(() => {
  //   getUsersClientLocation(setGeolocationAvailability, setUserLocation);
  // }, []);
  
  // useEffect(() => {
  //   getUsersClientAddress(userLocation, setGetAddressLoading, setUserAddress);
  //   getWeatherByLocation(userLocation, setGetWeatherLoading, setLocalWeather);  
  // }, [userLocation]);

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


  // const handleUpdateClick = useCallback(() => {
  //   getUsersClientAddress(userLocation, setGetWeatherLoading, setLocalWeather);
  //   getWeatherByLocation(userLocation, setGetWeatherLoading, setLocalWeather);
  // }, []);

  const handleUpdateClick = () => {
    console.log('clicked')
    getUsersClientAddress(userLocation, setGetWeatherLoading, setLocalWeather);
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
                {/* <span>Address: <span>{`${userAddress[0]?.name}, ${userAddress[0]?.state} - ${userAddress[0]?.country}`}</span></span> */}
                {/* <span>Weather: <span>{localWeather?.weather[0]?.description}</span></span> */}
                <span>Temperature: <span>{localWeather?.main?.temp} K</span></span>
                <span>Feels like: <span>{localWeather?.main?.feels_like} K</span></span>
                <span>Max. Temp.: <span>{localWeather?.main?.temp_max} K</span></span>
                <span>Min. Temp.: <span>{localWeather?.main?.temp_min} K</span></span>
                <span>Humidity: <span>{localWeather?.main?.humidity} %</span></span>
                <span>Pressure: <span>{localWeather?.main?.pressure} hPa</span></span>
              </WeatherPaper>
            </>
          )
        }
        <UpdateDataButton 
          variant="contained" 
          onClick={() => handleUpdateClick()}
        >
          Update
        </UpdateDataButton>
      </Grid>
    </Grid>
  ); 
}

export default Weather;
