import { Skeleton } from '@mui/material'
import React from 'react'
import { WeatherPaper } from '../../pages/localWeatherInfo/WeatherStyles';

function GenericSkeleton(props) {
  const {
    width,
    height,
    variant,
    animation,
  } = props;

  return (
    <>
      <WeatherPaper>
        <Skeleton 
          variant={variant}
          width={width}
          animation={animation}
          height={height}
        />
      </WeatherPaper>
      <WeatherPaper>
        {
          Array.from({length: 7}, (_, index) => {
            return (
              <Skeleton 
                key={index}
                variant={variant}
                animation={animation}
                width={width}
                height={height}
              />
            );
          })
        }
      </WeatherPaper>
    </>
  )
}

export default GenericSkeleton;
