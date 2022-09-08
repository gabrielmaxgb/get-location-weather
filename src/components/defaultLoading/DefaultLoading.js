import { CircularProgress } from '@mui/material'
import React from 'react'
import { DefaultLoadingContainer } from './DefaultLoadingStyles'

function DefaultLoading() {
  return (
    <DefaultLoadingContainer>
      <CircularProgress />
    </DefaultLoadingContainer>
  )
}

export default DefaultLoading