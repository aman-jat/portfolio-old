import theme from '../styles/theme';
import { Button, Stack, Typography } from '@mui/material';

const CheckoutMyResume = () => {
  return (
    <Stack
      sx={{ backgroundColor: theme.palette.secondary.light }}
      gap={5}
      alignItems='center'
      p={10}
    >
      <Typography variant='h3'>CHECK OUT MY RESUME !</Typography>
      <Button variant='outlined'>GRAB A COPY</Button>
    </Stack>
  );
};

export default CheckoutMyResume;
