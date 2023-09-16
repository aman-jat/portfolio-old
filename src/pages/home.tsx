import CheckoutMyResume from './checkout-my-resume';
import Experience from './experience';
import FirstPage from './first-page';
import Footer from './footer';
import GetInTouch from './get-in-touch';
import Header from './header';
import LittleAboutMe from './little-about-me';
import './universal.css';
import WhatIDo from './what-I-do';

const Home = () => {
  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5, // Intersection threshold, adjust as needed
  //   };
  //   const whatIdoObserver = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         let delay = 100;
  //         [1, 2, 3].forEach((key) => {
  //           setTimeout(() => {
  //             switch (key) {
  //               case 1:
  //                 setShowBox1(true);
  //                 break;
  //               case 2:
  //                 setShowBox2(true);
  //                 break;
  //               case 3:
  //                 setShowBox3(true);
  //                 break;
  //             }
  //           }, delay);
  //           delay += 200; // Increase delay by 1 second for each box
  //         });
  //         whatIdoObserver.unobserve(entry.target);
  //       }
  //     });
  //   }, options);

  //   const firstpageObserver = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const el: any = (headerRef as any).current.style;
  //         if (entry.intersectionRatio >= 0.8) {
  //           el.padding = '20px';
  //           el.backgroundColor = 'transparent';
  //           el.boxShadow = 'none';
  //           el.backdropFilter = 'none';
  //         } else {
  //           whatIdoObserver.unobserve(entry.target);
  //           el.padding = '10px';
  //           el.backgroundColor = 'rgba(0,0,0,0.6)';
  //           el.boxShadow = '0 0 12px 0 rgba(256, 256, 256, 0.5)';
  //           el.backdropFilter = 'blur(2.5px)';
  //         }
  //       });
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px', // Adjust the rootMargin to control when the callback is triggered
  //       threshold: 0.8,
  //     }
  //   );

  //   if (whatIdoRef.current) {
  //     whatIdoObserver.observe(whatIdoRef.current);
  //   }
  //   if (firstpageRef.current) {
  //     firstpageObserver.observe(firstpageRef.current);
  //   }

  //   return () => {
  //     if (whatIdoRef.current) {
  //       whatIdoObserver.unobserve(whatIdoRef.current);
  //     }
  //     if (firstpageRef.current) {
  //       firstpageObserver.unobserve(firstpageRef.current);
  //     }
  //   };
  // }, []);

  return (
    <>
      <Header />
      {/* // first page */}
      <FirstPage />
      {/* second page - little about me */}
      <LittleAboutMe />
      {/* third page - what I do */}
      <WhatIDo />
      {/* fourth page - experience */}
      <Experience />
      {/* fifth page - check out my resume */}
      <CheckoutMyResume />
      {/* sixth page - get in touch*/}
      <GetInTouch />
      {/* footer page - */}
      <Footer />
    </>
  );
};

export default Home;
