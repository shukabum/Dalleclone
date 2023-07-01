import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Box role="status"
    >
         <CircularProgress color="inherit" />
  </Box>
  )
}

export default Loader