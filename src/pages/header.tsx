import theme from '../styles/theme';
import { Box, Drawer, Link, List, Stack, Typography } from '@mui/material';
import { useRef, useState } from 'react';

const navItems = ['About', 'Passion', 'Experience', 'Work', 'Contact'];

const Header = () => {
  const headerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const HeaderLink = ({ children }: any) => {
    return (
      <Link underline='none' sx={{ color: theme.palette.common.white, cursor: 'pointer' }}>
        <Typography variant='h6'>{children}</Typography>
      </Link>
    );
  };

  return (
    <>
      <Stack
        display={{ xs: 'none', sm: 'flex' }}
        direction='row'
        ref={headerRef}
        className='header'
      >
        <Stack sx={{ cursor: 'pointer' }}>
          <Typography sx={{ color: theme.palette.common.white }} variant='h4'>
            Aman Jat
          </Typography>
        </Stack>

        <Stack gap={4} direction='row'>
          {navItems.map((item) => (
            <HeaderLink key={item}>{item}</HeaderLink>
          ))}
        </Stack>
      </Stack>

      {/* // header - mobile */}
      <Stack display={{ xs: 'flex', sm: 'none' }} className='header-mobile'>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack sx={{ cursor: 'pointer' }}>
            <Typography sx={{ color: theme.palette.common.white }} variant='h4'>
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
          <List sx={{ mt: '60px', backgroundColor: '#262626' }}>
            <Stack gap={2} p={2}>
              {navItems.map((item) => (
                <HeaderLink key={item}>{item}</HeaderLink>
              ))}
            </Stack>
          </List>
        </Drawer>
      </Stack>
    </>
  );
};

export default Header;
