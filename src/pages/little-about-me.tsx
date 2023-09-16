import { CodeRounded, CoffeeRounded, DeveloperModeRounded } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import dp from '../assets/images/IMG_20201207_170759.jpg';

const LittleAboutMe = () => {
  return (
    <Stack p={2} px={10} height='95vh' alignItems='center'>
      <Stack maxWidth={800} height='100%' gap={4} justifyContent='space-evenly' alignItems='center'>
        <Typography variant='h3'>A LITTLE ABOUT ME</Typography>
        <img style={{ borderRadius: '50%' }} src={dp} alt={'display picture'} height={200} />
        <Typography textAlign='center'>
          Hey! My name is Aman and I'm a <b>full stack developer</b> and <b>software engineer</b>{' '}
          with a passion for developement and engineering code. I'm currently a working as same at
          Sleeksky Technology Pvt Ltd. I aspire toward a career that will allow me to channel my
          creativity through crafting beautiful software and engaging experiences.
        </Typography>
        <Typography textAlign='center'>
          When I'm not on the computer, I enjoy snowboarding, swimming, and petting dogs.
        </Typography>
        <Stack
          justifyContent='center'
          alignItems='center'
          width='80%'
          py={3}
          gap={3}
          borderRadius={1}
          sx={{ backgroundColor: '#00000010' }}
        >
          <Typography variant='h4'> SELF PROCLAMATIONS</Typography>
          <Stack direction='row' gap={8}>
            <Stack alignItems='center'>
              <DeveloperModeRounded fontSize={'large'} color='action' />
              <Typography color='#00000099'>Mobile Developer</Typography>
            </Stack>
            <Stack alignItems='center'>
              <CodeRounded fontSize='large' color='action' />
              <Typography color='#00000099'> Web Developer</Typography>
            </Stack>
            <Stack alignItems='center'>
              <CoffeeRounded fontSize='large' color='action' />
              <Typography color='#00000099'>Coffee Lover</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LittleAboutMe;
