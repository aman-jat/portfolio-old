import {
  CodeRounded,
  CoffeeRounded,
  Copyright,
  DeveloperModeRounded,
  DevicesRounded,
  Facebook,
  GitHub,
  Instagram,
  KeyboardArrowDownRounded,
  LightbulbRounded,
  LinkedCameraOutlined,
  LinkedIn,
  RocketLaunchRounded,
  SendRounded,
  YouTube,
} from '@mui/icons-material'
import {
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import dp from '../../assets/images/IMG_20201207_170759.jpg'
import theme from '../../styles/theme'

const Home = () => {
  const HeaderLink = ({ children }: any) => {
    return (
      <Link underline='none' sx={{ cursor: 'pointer' }}>
        <Typography variant='h6'>{children}</Typography>
      </Link>
    )
  }

  const thirdpagedata: {
    title: string
    description: string
  }[] = [
    {
      title: 'DESING',
      description: `Design isn't just what a product looks like and feels like on the outside. Design
          encompasses the internal functionality of a product as well as the overall user
          experience. I strive to design interfaces and experiences that people can enjoy on all
          digital mediums.`,
    },
    {
      title: 'DEVELOPMENT',
      description: `With a strong foundation in computer science, I'm passionate about web design and 
          development, and interested in mobile app development. As I grow as a developer, I hope to write
          clean, readable code that can be used by others and leveraged to create beautiful software.`,
    },
    {
      title: 'INVOLVEMENT',
      description: `At Northeastern, I'm currently the web chair for nuWiT (NU Women in Tech) as well as a 
          Teaching Assistant for the undergrad HCI course. Previously, I've been involved with the club water
          polo team, the resident student association, and the ski and snowboard club.`,
    },
  ]
  const headerOptions = ['About', 'Passion', 'Experience', 'Work', 'Contact']

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ]

  const item2 = [
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ]

  const socialMedia = [
    {
      icon: <Instagram />,
      url: 'https://www.instagram.com',
    },
    {
      icon: <YouTube />,
      url: 'https://www.instagram.com',
    },
    {
      icon: <Facebook />,
      url: 'https://www.instagram.com',
    },
    {
      icon: <GitHub />,
      url: 'https://www.instagram.com',
    },
    {
      icon: <LinkedIn />,
      url: 'https://www.instagram.com',
    },
  ]

  return (
    <>
      {/* // header */}
      <Stack p={4} direction='row' justifyContent='space-between' alignItems='baseline'>
        <Stack>
          <Typography variant='h5'>Aman Jat</Typography>
        </Stack>
        <Stack gap={4} direction='row'>
          {headerOptions.map((item) => (
            <HeaderLink>{item}</HeaderLink>
          ))}
        </Stack>
      </Stack>

      {/* // first page */}
      <Stack sx={{ backgroundColor: '#00000050' }} height='80vh'>
        <Stack height='100vh' justifyContent='center' alignItems='center'>
          <Typography variant='h2'>HI, I'M AMAN JAT</Typography>
          <Typography>Full Stack Developer & Code Enthusiast</Typography>
        </Stack>
        <Stack justifyContent='center' alignItems='center'>
          <HeaderLink>
            <KeyboardArrowDownRounded fontSize={'large'} />
          </HeaderLink>
        </Stack>
      </Stack>

      {/* second page - little about me */}
      <Stack p={2} px={10} height='100vh' alignItems='center'>
        <Stack
          maxWidth={800}
          height='100%'
          gap={4}
          justifyContent='space-evenly'
          alignItems='center'
        >
          <Typography variant='h3'>A LITTLE ABOUT ME</Typography>
          <img style={{ borderRadius: '50%' }} src={dp} alt={'display picture'} height={200} />
          <Typography textAlign='center'>
            Hey! My name is Brittany and I'm a web developer with a passion for front end
            development and design. I'm currently a third year student at Northeastern University
            pursuing a degree in information science with a minor in interaction design. I aspire
            toward a career that will allow me to channel my creativity through crafting beautiful
            software and engaging experiences.
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

      {/* third page */}
      <Stack
        sx={{ backgroundColor: theme.palette.primary.light }}
        p={2}
        px={10}
        height='100vh'
        justifyContent='center'
        alignItems='center'
        gap={4}
      >
        <Typography variant='h3'> What I do</Typography>
        <Stack direction='row'>
          {thirdpagedata.map((item, index) => {
            return (
              <Stack alignItems='center' gap={2}>
                <Stack
                  borderRadius='50%'
                  p={8}
                  sx={{ backgroundColor: theme.palette.primary.main }}
                >
                  {index === 0 ? (
                    <DevicesRounded fontSize='large' sx={{ color: theme.palette.common.white }} />
                  ) : index === 1 ? (
                    <CodeRounded fontSize='large' sx={{ color: theme.palette.common.white }} />
                  ) : (
                    <LightbulbRounded fontSize='large' sx={{ color: theme.palette.common.white }} />
                  )}
                </Stack>
                <Typography variant='h6'>{item.title}</Typography>
                <Typography textAlign='center'>{item.description}</Typography>
              </Stack>
            )
          })}
        </Stack>
      </Stack>

      {/* fourth page - experience */}
      <Stack justifyContent='space-evenly' height='100vh' alignItems='center'>
        <Stack px={10} direction='column' alignItems='center' gap={4}>
          <Typography variant='h3'> EXPERIENCE </Typography>
          <Typography textAlign='center'>
            I've been doing web developement for about 3 years now, and I'm always eager to learn
            more in this fast paced industry
          </Typography>
        </Stack>
        <Stack direction='row' gap={5}>
          <Stack>
            <Typography variant='h5'>SOME TECHNOLOGIES I'VE WORKED WITH</Typography>
            <ImageList sx={{ width: 500, height: 500 }} cols={4} rowHeight={120}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading='lazy'
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>
          <Stack direction='column' alignItems='ceter'>
            <Typography variant='h5'>WHERE I'VE WORKED</Typography>
            <ImageList gap={2} sx={{ width: 190, height: 400 }} cols={1} rowHeight={120}>
              {item2.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading='lazy'
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>
        </Stack>
      </Stack>

      {/* fifth page - check out my resume */}
      <Stack
        sx={{ backgroundColor: theme.palette.secondary.light }}
        gap={5}
        alignItems='center'
        p={10}
      >
        <Typography variant='h3'>CHECK OUT MY RESUME !</Typography>
        <Button variant='outlined'>GRAB A COPY</Button>
      </Stack>

      {/* sixth page - get in touch*/}
      <Stack gap={5} alignItems='center' p={10}>
        <SendRounded style={{ fontSize: 70 }} />
        <Typography variant='h3'>GET IN TOUCH !</Typography>
        <Typography textAlign='center'>
          Wheather you have an idea for a project or just want to chat, feel free to shoot me an
          email !
        </Typography>
        <Button variant='outlined'>SAY HELLO</Button>
      </Stack>

      {/* footer page - */}
      <Stack
        sx={{ backgroundColor: theme.palette.common.black }}
        gap={5}
        alignItems='center'
        p={10}
      >
        <Stack direction='row' gap={0.5}>
          {socialMedia.map((item) => {
            return (
              <IconButton
                sx={{
                  p: 1,
                  borderRadius: 0.5,
                  backgroundColor: '#ffffff20',
                  color: theme.palette.common.white,
                }}
              >
                {item.icon}
              </IconButton>
            )
          })}
        </Stack>
        <RocketLaunchRounded
          sx={{
            fontSize: 40,
            color: theme.palette.common.white,
          }}
        />
        <Stack
          gap={1}
          sx={{ color: theme.palette.common.white }}
          direction='row'
          alignItems='center'
        >
          <Copyright />
          <Typography variant='subtitle2' textAlign='center'>
            Aman Jat 2023
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default Home
