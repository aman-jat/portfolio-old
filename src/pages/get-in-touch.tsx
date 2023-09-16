import { SendRounded } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';

const GetInTouch = () => {
  return (
    <Stack gap={5} alignItems='center' p={10}>
      <SendRounded style={{ fontSize: 70 }} />
      <Typography variant='h3'>GET IN TOUCH !</Typography>
      <Typography textAlign='center'>
        Wheather you have an idea for a project or just want to chat, feel free to shoot me an email
        !
      </Typography>
      <Button variant='outlined'>SAY HELLO</Button>
    </Stack>
  );
};

export default GetInTouch;
