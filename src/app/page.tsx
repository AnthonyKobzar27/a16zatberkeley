'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    // Initialize Vanta.js globe effect
    const initVanta = () => {
      if (typeof window !== 'undefined' && (window as any).VANTA) {
        (window as any).VANTA.GLOBE({
          el: "#vanta-background",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x23153c,
          color: 0xff3f81,
          color2: 0xffffff,
          size: 1
        });
      } else {
        // Retry if VANTA is not loaded yet
        setTimeout(initVanta, 100);
      }
    };

    initVanta();
  }, []);

  return (
    <div className="h-screen bg-black text-white overflow-hidden relative">
      {/* Vanta.js background */}
      <div id="vanta-background" className="absolute inset-0 w-full h-full"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main content - single page layout */}
      <div className="relative z-20 h-full flex items-center">
        {/* Content positioned 15% from left */}
        <div className="flex flex-col items-center justify-center" style={{marginLeft: '20%'}}>
          {/* Logos section */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-12">
              {/* a16z Logo */}
              <div>
                <Image
                  src="/logos/e512df54-c4f5-415e-ae89-6abbdb060579-3.jpg"
                  alt="a16z logo"
                  width={240}
                  height={120}
                  className="rounded-lg"
                />
              </div>
              
              {/* X symbol */}
              <div className="text-7xl font-bold text-white drop-shadow-lg">×</div>
              
              {/* Berkeley Logo */}
              <div>
                <Image
                  src="/logos/calother.png"
                  alt="UC Berkeley logo"
                  width={240}
                  height={120}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            {/* Hackathon text */}
            <div className="text-center mt-12">
              <h1 className="text-8xl font-bold text-white drop-shadow-lg">Hackathon</h1>
            </div>
          </div>

          {/* Date section */}
          <div className="mb-16 text-center">
            <div className="text-5xl font-bold text-white mb-3">10 / 9 / 2025</div>
          </div>

          {/* Register button */}
          <div>
            <a 
              href="https://partiful.com/e/5lvjTXL4wXzrRyIsYMxW?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-white px-16 py-8 rounded-full text-3xl font-semibold hover:scale-105 transition-transform duration-300 shadow-xl text-center" 
              style={{backgroundColor: '#ff3f81'}}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
