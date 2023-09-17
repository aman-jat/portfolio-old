import theme from '../styles/theme';
import { Box, Button, Stack, Typography } from '@mui/material';
import image from '../assets/images/laptop-blur.jpg';

export const OutlinedButton = ({ children, ...props }: any) => {
  const dark = props.dark;
  return (
    <Button
      sx={{
        color: dark ? theme.palette.common.black : theme.palette.common.white,
        textTransform: 'uppercase',
        fontWeight: 500,
        position: 'relative',
        borderColor: dark ? theme.palette.common.black : theme.palette.common.white,
        overflow: 'hidden',
        backdropFilter: 'blur(2.5px)',
        px: { xs: 2, md: 4 },
        span: {
          position: 'relative',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: ' -100%',
          width: '100%',
          height: '100%',
          backgroundColor: dark ? theme.palette.common.black : theme.palette.common.white, // Adjust the color as needed
          transform: 'translateX(0)',
          transition: 'transform 0.5s',
          zindex: -1,
        },
        ' &:hover': {
          color: dark ? theme.palette.common.white : theme.palette.common.black,
        },
        '&:hover::before': {
          transform: 'translateX(100%)',
        },
      }}
      variant='outlined'
      {...props}
    >
      {children}
    </Button>
  );
};

const CheckoutMyResume = () => {
  return (
    <Stack height={300} sx={{ position: 'relative' }}>
      <Stack
        height={300}
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
        <Stack zIndex={1} gap={5} alignItems='center' p={10}>
          <Typography variant='h2'>CHECK OUT MY RÉSUMÉ!</Typography>
          <OutlinedButton size='small'>
            <span>Grab a Copy</span>
          </OutlinedButton>
        </Stack>
      </Stack>
      <Box
        height={300}
        sx={{
          background: 'rgba(0, 0, 0, 0.6)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }}
      />
    </Stack>
  );
};

export default CheckoutMyResume;
