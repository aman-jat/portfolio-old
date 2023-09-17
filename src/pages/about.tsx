import { CodeRounded, CoffeeRounded, DeveloperModeRounded } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import dp from '../assets/images/IMG_20201207_170759.jpg';
import theme from '../styles/theme';

const About = () => {
  return (
    <Stack
      id='about'
      sx={{ position: 'relative', minHeight: 700 }}
      p={2}
      px={{ xs: 4, sm: 8 }}
      height={{ xs: '100%', md: '100vh' }}
      alignItems='center'
    >
      <Stack
        overflow='hidden'
        maxWidth={{ xs: 260, sm: '80%', md: 800 }}
        height='100%'
        py={{ xs: 0, sm: 8, md: 0 }}
        gap={{ xs: 4, sm: 6, md: 8, lg: 3 }}
        justifyContent='center'
        alignItems='center'
      >
        <Typography color={theme.palette.text.secondary} variant='h2' textAlign='center'>
          A LITTLE ABOUT ME
        </Typography>

        <img style={{ borderRadius: '50%' }} src={dp} alt={'display picture'} height={200} />

        <Stack gap={1}>
          <Typography color={theme.palette.text.secondary} textAlign='center'>
            Hey! My name is Aman and I'm a <b>full stack developer</b> and <b>software engineer</b>{' '}
            with a passion for developement and engineering code. I'm currently a working as same at
            Sleeksky Technology Pvt Ltd. I aspire toward a career that will allow me to channel my
            creativity through crafting beautiful software and engaging experiences.
          </Typography>
          <Typography color={theme.palette.text.secondary} textAlign='center'>
            When I'm not on the computer, I enjoy snowboarding, swimming, and petting dogs.
          </Typography>
        </Stack>

        <Stack
          justifyContent='center'
          alignItems='center'
          width={{ xs: '100%', sm: '70%', md: '80%' }}
          py={{ xs: 3, lg: 4 }}
          gap={{ xs: 3, lg: 4 }}
          borderRadius={1}
          sx={{ backgroundColor: theme.palette.grey[200] }}
        >
          <Typography color={theme.palette.text.secondary} variant='h3' textAlign='center'>
            {'SELF PROCLAMATIONS'}
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 8 }}>
            <Stack alignItems='center'>
              <DeveloperModeRounded fontSize={'large'} color='action' />
              <Typography color={theme.palette.text.disabled}>Mobile Developer</Typography>
            </Stack>
            <Stack alignItems='center'>
              <CodeRounded fontSize='large' color='action' />
              <Typography color={theme.palette.text.disabled}> Web Developer</Typography>
            </Stack>
            <Stack alignItems='center'>
              <CoffeeRounded fontSize='large' color='action' />
              <Typography color={theme.palette.text.disabled}>Coffee Lover</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
