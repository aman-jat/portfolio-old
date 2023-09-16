import theme from '../styles/theme';
import { Link, Stack, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import image from '../assets/images/background.jpg';
import { KeyboardArrowDownRounded } from '@mui/icons-material';

const FirstPage = () => {
  const firstpageRef = useRef(null);

  const HeaderLink = ({ children }: any) => {
    return (
      <Link underline='none' sx={{ color: theme.palette.common.white, cursor: 'pointer' }}>
        <Typography variant='h6'>{children}</Typography>
      </Link>
    );
  };

  useEffect(() => {
    // const options = {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold: 0.5, // Intersection threshold, adjust as needed
    // };

    const firstpageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((_) => {
          //   const el: any = (headerRef as any).current.style;
          //   if (entry.intersectionRatio >= 0.8) {
          //     el.padding = '20px';
          //     el.backgroundColor = 'transparent';
          //     el.boxShadow = 'none';
          //     el.backdropFilter = 'none';
          //   } else {
          //     whatIdoObserver.unobserve(entry.target);
          //     el.padding = '10px';
          //     el.backgroundColor = 'rgba(0,0,0,0.6)';
          //     el.boxShadow = '0 0 12px 0 rgba(256, 256, 256, 0.5)';
          //     el.backdropFilter = 'blur(2.5px)';
          //   }
        });
      },
      {
        root: null,
        rootMargin: '0px', // Adjust the rootMargin to control when the callback is triggered
        threshold: 0.8,
      }
    );

    if (firstpageRef.current) {
      firstpageObserver.observe(firstpageRef.current);
    }

    return () => {
      if (firstpageRef.current) {
        firstpageObserver.unobserve(firstpageRef.current);
      }
    };
  }, []);

  return (
    <Stack
      ref={firstpageRef}
      sx={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
      height='100vh'
    >
      <Stack height='100vh' justifyContent='center' alignItems='center'>
        <Typography
          sx={{
            color: theme.palette.common.white,
            opacity: 0,
            animationName: 'fadeInDown',
            animationDuration: '1s',
            animationFillMode: 'both',
            animationDelay: '0.5s',
            '-webkit-animation-delay': '0.5s',
            '@keyframes fadeInDown': {
              from: {
                opacity: 0,
                transform: 'translate3d(0, -100%, 0)',
              },
              to: {
                opacity: 1,
                transform: 'none',
              },
            },
          }}
          variant='h2'
        >
          HI, I'M AMAN JAT
        </Typography>
        <Typography
          sx={{
            color: theme.palette.common.white,
            opacity: 0,
            animationName: 'fadeInUp',
            animationDuration: '1s',
            animationFillMode: 'both',
            animationDelay: '0.5s',
            '-webkit-animation-delay': '0.5s',
            '@keyframes fadeInUp': {
              from: {
                opacity: 0,
                transform: 'translate3d(0, 100%, 0)',
              },
              to: {
                opacity: 1,
                transform: 'none',
              },
            },
          }}
        >
          Full Stack Developer & Code Enthusiast
        </Typography>
      </Stack>
      <Stack justifyContent='center' alignItems='center'>
        <HeaderLink>
          <KeyboardArrowDownRounded fontSize={'large'} />
        </HeaderLink>
      </Stack>
    </Stack>
  );
};

export default FirstPage;
