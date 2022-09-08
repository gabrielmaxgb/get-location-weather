import { Grid } from '@mui/material'
import React from 'react'

function LocalWeatherInfo() {
  

  return (
    <Grid container xs={12} style={{backgroundColor: "pink"}}>
      <Grid 
        item
        container
        alignItems="center"
        justifyContent="center"
        xs={12}
        md={6}
        style={{backgroundColor: "blue"}}
      >
        Input local info
      </Grid>
      <Grid 
        item
        container
        alignItems="center"
        justifyContent="center"
        xs={12}
        md={6}
        style={{backgroundColor: "green"}}
      >
        LocalWeatherInfo
      </Grid>
    </Grid>
  )
}

export default LocalWeatherInfo