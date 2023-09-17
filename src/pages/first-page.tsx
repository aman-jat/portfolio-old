import { KeyboardArrowDownRounded } from '@mui/icons-material';
import theme from '../styles/theme';
import { Box, Drawer, Link as MuiLink, List, Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import image from '../assets/images/mountain-dusk.jpg';

const navItems = [
  { title: 'About', to: 'about' },
  { title: 'Passion', to: 'passion' },
  { title: 'Work', to: 'work' },
  { title: 'Experience', to: 'experience' },
  { title: 'Contact', to: 'contact' },
];

const Header = () => {
  const headerRef = useRef(null);
  const firstpageRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const HeaderLink = ({ item }: { item: { title: string; to: string } }) => {
    return (
      <MuiLink
        onClick={() => scrollToSection(`${item.to}`)}
        className='link'
        underline='none'
        sx={{
          color: theme.palette.common.white,
        }}
      >
        <Typography variant='h6'>{item.title}</Typography>
      </MuiLink>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('entry.intersectionRatio', entry.intersectionRatio);
          const el = (headerRef as any).current.style;

          if (entry.intersectionRatio >= 0.8) {
            el.paddingTop = '20px';
            el.paddingBottom = '20px';
            el.backgroundColor = 'transparent';
            el.boxShadow = 'none';
            el.backdropFilter = 'none';
          } else {
            el.paddingTop = '10px';
            el.paddingBottom = '10px';
            el.backgroundColor = 'rgba(0,0,0,0.6)';
            el.backdropFilter = 'blur(2.5px)';
          }
        });
      },
      {
        root: null,
        rootMargin: '0px', // Adjust the rootMargin to control when the callback is triggered
        threshold: 0.8,
      }
    );

    if (firstpageRef.current) {
      observer.observe(firstpageRef.current);
    }

    return () => {
      if (firstpageRef.current) {
        observer.unobserve(firstpageRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* header - desktop */}
      <Stack
        px={4}
        ref={headerRef}
        display={{ xs: 'none', sm: 'flex' }}
        zIndex={2}
        width='100%'
        position='fixed'
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={{
          backdropFilter: 'blur(2.5px)',
          transition: 'background 0.5s ease-in-out, padding 0.5s ease-in-out',
        }}
      >
        <MuiLink
          className='no-animation-link'
          underline='none'
          sx={{ color: theme.palette.common.white }}
        >
          <Typography variant='h5'>Aman Jat</Typography>
        </MuiLink>

        <Stack gap={4} direction='row'>
          {navItems.map((item) => (
            <HeaderLink key={item.title} item={item} />
          ))}
        </Stack>
      </Stack>

      {/* // header - mobile */}
      <Stack display={{ xs: 'flex', sm: 'none' }} className='header-mobile'>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack sx={{ cursor: 'pointer' }}>
            <Typography sx={{ color: theme.palette.common.white }} variant='h5'>
              Aman Jat
            </Typography>
          </Stack>

          <Stack
            onClick={() => setIsOpen((prev) => !prev)}
            className='mainDiv'
            gap={0.7}
            display={{ xs: 'flex', sm: 'flex' }}
            direction='column'
          >
            <Box className={`bar1 ${isOpen ? 'clicked' : ''}`}></Box>
            <Box className={`bar2 ${isOpen ? 'clicked' : ''}`}></Box>
            <Box className={`bar3 ${isOpen ? 'clicked' : ''}`}></Box>
          </Stack>
        </Stack>

        {/* mobile - top nav bar */}
        <Drawer anchor='top' open={isOpen} onClose={() => setIsOpen((prev) => !prev)}>
          <Stack sx={{ mt: '60px', backgroundColor: '#262626' }} gap={2} p={2}>
            {navItems.map((item) => (
              <MuiLink
                key={item.title}
                onClick={() => {
                  scrollToSection(`${item.to}`);
                  setIsOpen(false);
                }}
                className='no-animation-link'
                underline='none'
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                <Typography variant='h6'>{item.title}</Typography>
              </MuiLink>
            ))}
          </Stack>
        </Drawer>
      </Stack>

      <Stack minHeight={700} height='100vh' ref={firstpageRef} sx={{ position: 'relative' }}>
        <Stack
          minHeight={700}
          height='100vh'
          width='100%'
          sx={{
            position: 'absolute',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000',
            backgroundPosition: 'center',
          }}
        >
          <Stack
            px={{ xs: 4, sm: 0 }}
            gap={{ xs: 2, md: 0 }}
            zIndex={1}
            height='100vh'
            justifyContent='center'
            alignItems='center'
          >
            <Typography
              textAlign='center'
              sx={{
                color: theme.palette.common.white,
                opacity: 0,
                animationName: 'fadeInDown',
                animationDuration: '1s',
                animationFillMode: 'both',
                animationDelay: '0.5s',
                WebkitAnimationDelay: '0.5s',
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
              variant='h1'
            >
              HI, I'M AMAN JAT
            </Typography>
            <Typography
              textAlign='center'
              sx={{
                color: theme.palette.common.white,
                opacity: 0,
                animationName: 'fadeInUp',
                animationDuration: '1s',
                animationFillMode: 'both',
                animationDelay: '0.5s',
                WebkitAnimationDelay: '0.5s',
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
          <Stack zIndex={1} justifyContent='center' alignItems='center'>
            <KeyboardArrowDownRounded fontSize={'large'} />
          </Stack>
        </Stack>
        <Box
          minHeight={700}
          height='100vh'
          sx={{
            background: 'rgba(0, 0, 0, 0.6)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}
        />
      </Stack>
    </>
  );
};

export default Header;
