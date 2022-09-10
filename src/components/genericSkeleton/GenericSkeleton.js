import { Skeleton } from '@mui/material'
import React from 'react'
import { WeatherPaper } from '../../pages/localWeatherInfo/WeatherStyles';

function GenericSkeleton() {
  return (
    <>
      <WeatherPaper>
        <Skeleton variant="rectangular" width="100%" height={27} />
      </WeatherPaper>
      <WeatherPaper>
        {
          Array.from({length: 7}, (_, index) => {
            return (
              <Skeleton key={index} variant="rectangular" animation="wave" width="100%" height={27} />
            );
          })
        }
      </WeatherPaper>
    </>
  )
}

export default GenericSkeleton;
