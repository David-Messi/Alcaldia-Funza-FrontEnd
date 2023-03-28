

import { Alert, Stack, Typography } from '@mui/material';






export const MensajeAlertaDanger = ({ titulo }: any) => {


  return (
        <Stack sx={{ width: '100%' }} mt={5} >
            <Alert variant="outlined" severity="error" sx={{ display:'flex', justifyContent:'center', }}>
                <Typography color='red' >{ titulo }</Typography>
            </Alert>
        </Stack>
  )
}
