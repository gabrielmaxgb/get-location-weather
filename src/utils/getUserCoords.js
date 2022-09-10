export const getUserCoords = (setUserLocation) => {
  navigator.geolocation.getCurrentPosition(function(position) {
    setUserLocation({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });
  });
};
