import { ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import react from '../assets/images/react.png';
import angular from '../assets/images/angular.png';
import vite from '../assets/images/vite.png';
import laravel from '../assets/images/laravel.png';
import node from '../assets/images/node.png';
import mysql from '../assets/images/mysql.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import javascript from '../assets/images/javascript.png';
import typescript from '../assets/images/typescript.png';
import mui from '../assets/images/mui.png';
import github from '../assets/images/github.png';
import './universal.css';
import theme from '../styles/theme';

const Experience = () => {
  const skillsList = [
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
  ];

  return (
    <Stack
      minHeight={700}
      id='experience'
      justifyContent='space-evenly'
      height='100vh'
      alignItems='center'
    >
      <Stack px={10} direction='column' alignItems='center' gap={4}>
        <Typography color={theme.palette.text.secondary} variant='h2'>
          {'EXPERIENCE'}
        </Typography>
        <Typography color={theme.palette.text.secondary} textAlign='center'>
          I've been doing full stack developement for 2+ years now, and I'm always eager to learn
          more in this fast paced industry
        </Typography>
      </Stack>
      <Stack direction='row' gap={5}>
        <Stack>
          <Typography color={theme.palette.text.secondary} variant='h5'>
            SOME TECHNOLOGIES I'VE WORKED WITH
          </Typography>
          <ImageList sx={{ width: 500, height: 500 }} cols={4} rowHeight={120}>
            {skillsList.map((item) => (
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
        {/* </Stack> */}
      </Stack>
    </Stack>
  );
};

export default Experience;
