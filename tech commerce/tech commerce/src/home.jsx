import React, { useEffect, useRef } from 'react';
import './App.css';
import gsap from 'gsap';

export const Home = () => {
  // Create refs for the elements to be animated
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  

  // Use the useEffect hook to apply animations after the component mounts
  useEffect(() => {
    // Animate box1
    gsap.to(box1.current, {
      y: 3300,
      x:900,
      delay: 0.5,
      duration: 2,
      scrollTrigger:{
        trigger:box1.current,
        pin: true,
        start:"top 50%",
        ease:"poweri.inout"
      }
    });

  
  }, []);

  return (
    <section>
      <div ref={box1} className="box1">
        Hello
      </div>
      <div ref={box2} className=" box2">
        World
      </div>
      <div ref={box3} className="box3">
        Again
      </div>
    </section>
  );
};
