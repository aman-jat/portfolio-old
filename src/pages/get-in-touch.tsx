import { SendRounded } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { OutlinedButton } from './checkout-my-resume';
import theme from '../styles/theme';

const GetInTouch = () => {
  return (
    <Stack sx={{ backgroundColor: theme.palette.grey[100] }} gap={5} alignItems='center' p={10}>
      <SendRounded style={{ fontSize: 70, color: theme.palette.text.secondary }} />
      <Typography color={theme.palette.text.secondary} variant='h2'>
        GET IN TOUCH !
      </Typography>
      <Typography maxWidth={500} color={theme.palette.text.secondary} textAlign='center'>
        Wheather you have an idea for a project or just want to chat, feel free to shoot me an email
        !
      </Typography>
      <OutlinedButton size='small' dark>
        <span>GRAB A COPY</span>
      </OutlinedButton>
    </Stack>
  );
};

export default GetInTouch;
