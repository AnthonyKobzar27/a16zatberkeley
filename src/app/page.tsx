'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Type definition for VANTA
interface VantaGlobe {
  GLOBE: (options: {
    el: string;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    scale: number;
    scaleMobile: number;
    backgroundColor: number;
    color: number;
    color2: number;
    size: number;
  }) => void;
}

declare global {
  interface Window {
    VANTA?: VantaGlobe;
  }
}

export default function Home() {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  useEffect(() => {
    // Initialize Vanta.js globe effect
    const initVanta = () => {
      if (typeof window !== 'undefined' && window.VANTA) {
        window.VANTA.GLOBE({
          el: "#vanta-background",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x222222,
          color: 0xff3f81,
          color2: 0xffffff,
          size: 1
        });
        // Mark background as loaded
        setIsBackgroundLoaded(true);
      } else {
        // Retry if VANTA is not loaded yet
        setTimeout(initVanta, 100);
      }
    };

    initVanta();
  }, []);

  return (
    <div className="h-screen text-white overflow-hidden relative" style={{backgroundColor: '#222222'}}>
      {/* Vanta.js background */}
      <div id="vanta-background" className="absolute inset-0 w-full h-full"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Loading state */}
      {!isBackgroundLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      )}

      {/* Main content - only show when background is loaded */}
      {isBackgroundLoaded && (
        <div className="relative z-20 h-full flex items-center justify-center md:justify-start">
          {/* Content positioned 15% from left on desktop, centered on mobile */}
          <div className="flex flex-col items-center justify-center md:ml-[20%]">
            {/* Logos section */}
            <div className="mb-12">
            <div className="flex items-center justify-center space-x-2 md:space-x-8">
              {/* a16z and SF Tech Week grouped together */}
              <div className="flex items-center space-x-1 md:space-x-4">
                <div>
                  <Image
                    src="/logos/image 2.png"
                    alt="a16z logo"
                    width={180}
                    height={90}
                    className="rounded-lg"
                  />
                </div>
                
                <div>
                  <Image
                    src="/logos/image 4.png"
                    alt="SF Tech Week logo"
                    width={180}
                    height={90}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* X symbol */}
              <div className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">×</div>
              
              {/* UC Berkeley Logo */}
              <div>
                <Image
                  src="/logos/yellowberk.jpg"
                  alt="Cal logo"
                  width={180}
                  height={90}
                  className="rounded-lg"
                />
              </div>
            </div>
              
              {/* Hackathon text */}
              <div className="text-center mt-8 md:mt-12">
                <h1 className="text-4xl md:text-8xl font-bold text-white drop-shadow-lg">Hackathon</h1>
              </div>
            </div>

            {/* Date and time section */}
            <div className="mb-12 md:mb-16 text-center">
              <div className="text-lg md:text-2xl font-bold text-white mb-2">7pm - 12am</div>
              <div className="text-xl md:text-3xl font-bold text-white mb-3">10 / 9 / 2025</div>
            </div>

            {/* Register button */}
            <div>
              <a 
                href="https://partiful.com/e/5lvjTXL4wXzrRyIsYMxW?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-white px-8 py-4 md:px-16 md:py-8 rounded-full text-xl md:text-3xl font-semibold hover:scale-105 transition-transform duration-300 shadow-xl text-center" 
                style={{backgroundColor: '#ff3f81'}}
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
