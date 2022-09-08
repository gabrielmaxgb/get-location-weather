import React from 'react'
import ContactSupportSharpIcon from '@mui/icons-material/ContactSupportSharp';
import { RetrievingLocationContainer } from './RetrievingLocationStyles';

function RetrievingLocation() {
  return (
    <RetrievingLocationContainer>
      <h2>Could you please give access to your location?</h2>
      <ContactSupportSharpIcon sx={{fontSize: 100}} />
    </RetrievingLocationContainer>
  )
}

export default RetrievingLocation