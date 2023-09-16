import theme from '../styles/theme';
import { IconButton, Stack, Typography } from '@mui/material';
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  YouTube,
  Copyright,
  RocketLaunchRounded,
} from '@mui/icons-material';

const Footer = () => {
  const socialMediaList = [
    {
      icon: <Instagram />,
      url: 'https://www.instagram.com',
    },
    {
      icon: <YouTube />,
      url: 'https://www.youtube.com',
    },
    {
      icon: <Facebook />,
      url: 'https://www.facebook.com',
    },
    {
      icon: <GitHub />,
      url: 'https://www.github.com',
    },
    {
      icon: <LinkedIn />,
      url: 'https://www.linkedIn.com',
    },
  ];

  return (
    <Stack sx={{ backgroundColor: theme.palette.common.black }} gap={5} py={5} alignItems='center'>
      <Stack direction='row' gap={0.5}>
        {socialMediaList.map((item) => {
          return (
            <IconButton
              key={item.url}
              sx={{
                p: 1,
                borderRadius: 0.5,
                backgroundColor: '#ffffff20',
                color: theme.palette.common.white,
              }}
            >
              {item.icon}
            </IconButton>
          );
        })}
      </Stack>
      <RocketLaunchRounded
        sx={{
          fontSize: 40,
          color: theme.palette.common.white,
        }}
      />
      <Stack gap={1} sx={{ color: theme.palette.common.white }} direction='row' alignItems='center'>
        <Copyright />
        <Typography variant='subtitle2' textAlign='center'>
          Aman Jat 2023
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
