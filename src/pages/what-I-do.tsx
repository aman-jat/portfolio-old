import theme from '../styles/theme';
import { CodeRounded, DevicesRounded, LightbulbRounded } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

const WhatIDo = () => {
  const whatIdoRef = useRef(null);

  const thirdpagedata = [
    {
      title: 'DESIGN',
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
  ];

  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Intersection threshold, adjust as needed
    };
    const whatIdoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let delay = 100;
          [1, 2, 3].forEach((key) => {
            setTimeout(() => {
              switch (key) {
                case 1:
                  setShowBox1(true);
                  break;
                case 2:
                  setShowBox2(true);
                  break;
                case 3:
                  setShowBox3(true);
                  break;
              }
            }, delay);
            delay += 200; // Increase delay by 1 second for each box
          });
          whatIdoObserver.unobserve(entry.target);
        }
      });
    }, options);

    // const firstpageObserver = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((_) => {
    //       //   const el: any = (headerRef as any).current.style;
    //       //   if (entry.intersectionRatio >= 0.8) {
    //       //     el.padding = '20px';
    //       //     el.backgroundColor = 'transparent';
    //       //     el.boxShadow = 'none';
    //       //     el.backdropFilter = 'none';
    //       //   } else {
    //       //     whatIdoObserver.unobserve(entry.target);
    //       //     el.padding = '10px';
    //       //     el.backgroundColor = 'rgba(0,0,0,0.6)';
    //       //     el.boxShadow = '0 0 12px 0 rgba(256, 256, 256, 0.5)';
    //       //     el.backdropFilter = 'blur(2.5px)';
    //       //   }
    //     });
    //   },
    //   {
    //     root: null,
    //     rootMargin: '0px', // Adjust the rootMargin to control when the callback is triggered
    //     threshold: 0.8,
    //   }
    // );

    if (whatIdoRef.current) {
      whatIdoObserver.observe(whatIdoRef.current);
    }

    return () => {
      if (whatIdoRef.current) {
        whatIdoObserver.unobserve(whatIdoRef.current);
      }
    };
  }, []);

  return (
    <Stack
      color={theme.palette.text.secondary}
      id='passion'
      sx={{
        minHeight: 700,
        backgroundColor: theme.palette.grey[300],
      }}
      p={2}
      px={10}
      height='100vh'
      justifyContent='center'
      alignItems='center'
      gap={4}
    >
      <Typography variant='h2'> What I do</Typography>
      <Stack ref={whatIdoRef} direction='row'>
        {thirdpagedata.map((item, index) => {
          let shouldShow = false;
          switch (index) {
            case 0:
              shouldShow = showBox1;
              break;
            case 1:
              shouldShow = showBox2;
              break;
            case 2:
              shouldShow = showBox3;
              break;
          }

          return (
            <Stack
              className={`fade-box ${shouldShow ? 'show' : ''}`}
              key={index}
              alignItems='center'
              gap={2}
            >
              <Stack
                borderRadius='50%'
                p={8}
                sx={{
                  transition: 'transform 0.8s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'rotate(360deg)',
                  },
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                {index === 0 ? (
                  <DevicesRounded sx={{ fontSize: 50, color: theme.palette.common.white }} />
                ) : index === 1 ? (
                  <CodeRounded
                    fontSize='large'
                    sx={{ fontSize: 50, color: theme.palette.common.white }}
                  />
                ) : (
                  <LightbulbRounded
                    fontSize='large'
                    sx={{ fontSize: 50, color: theme.palette.common.white }}
                  />
                )}
              </Stack>
              <Typography variant='h5'>{item.title}</Typography>
              <Typography textAlign='center'>{item.description}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default WhatIDo;
