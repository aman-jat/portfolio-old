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
import react from '../../assets/images/react.png'
import angular from '../../assets/images/angular.png'
import vite from '../../assets/images/vite.png'
import laravel from '../../assets/images/laravel.png'
import node from '../../assets/images/node.png'
import mysql from '../../assets/images/mysql.png'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import javascript from '../../assets/images/javascript.png'
import typescript from '../../assets/images/typescript.png'
import mui from '../../assets/images/mui.png'
import github from '../../assets/images/github.png'
import './home.css'
import theme from '../../styles/theme'

const Home = () => {
  const HeaderLink = ({ children }: any) => {
    return (
      <Link underline='none' sx={{ color: theme.palette.common.white, cursor: 'pointer' }}>
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
      img: react,
      title: 'Breakfast',
    },
    {
      img: angular,
      title: 'Burger',
    },
    {
      img: vite,
      title: 'Camera',
    },
    {
      img: typescript,
      title: 'Tomato basil',
    },
    {
      img: laravel,
      title: 'Coffee',
    },
    {
      img: node,
      title: 'Hats',
    },
    {
      img: mysql,
      title: 'Honey',
    },
    {
      img: github,
      title: 'Bike',
    },
    {
      img: html,
      title: 'Basketball',
    },
    {
      img: css,
      title: 'Fern',
    },
    {
      img: javascript,
      title: 'Mushrooms',
    },
    {
      img: mui,
      title: 'Sea star',
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

      <Stack
        sx={{
          width: '100%',
          position: 'fixed',
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(3px)',
          boxShadow: ' 0 0 12px 0 rgba(0, 0, 0, 0.5)',
        }}
        px={4}
        py={2}
        direction='row'
        justifyContent='space-between'
        alignItems='baseline'
      >
        <Stack sx={{ cursor: 'pointer' }}>
          <Typography sx={{ color: theme.palette.common.white }} variant='h4'>
            Aman Jat
          </Typography>
        </Stack>
        <Stack gap={4} direction='row'>
          {headerOptions.map((item) => (
            <HeaderLink>{item}</HeaderLink>
          ))}
        </Stack>
      </Stack>

      {/* // first page */}
      <Stack mt={7} sx={{ backgroundColor: '#00000050' }} height='100vh'>
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
            Hey! My name is Aman and I'm a full stack developer and software engineer with a passion
            for developement and engineering code. I'm currently a working as same at Sleeksky
            Technology Pvt Ltd. I aspire toward a career that will allow me to channel my creativity
            through crafting beautiful software and engaging experiences.
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
            I've been doing full stack developement for 2+ years now, and I'm always eager to learn
            more in this fast paced industry
          </Typography>
        </Stack>
        <Stack direction='row' gap={5}>
          <Stack>
            <Typography variant='h5'>SOME TECHNOLOGIES I'VE WORKED WITH</Typography>
            <ImageList sx={{ width: 500, height: 500 }} cols={4} rowHeight={120}>
              {itemData.map((item) => (
                <ImageListItem sx={{ p: 3 }} key={item.img}>
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
          {/* <Stack direction='column' alignItems='ceter'>
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
          </Stack> */}
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
        py={5}
        alignItems='center'
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
