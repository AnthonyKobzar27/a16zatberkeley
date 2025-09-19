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
    // Initialize Vanta.js globe effect with synchronous scripts
    const initVanta = () => {
      if (typeof window !== 'undefined' && window.VANTA && window.VANTA.GLOBE) {
        try {
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
        } catch (error) {
          console.log('Vanta initialization failed:', error);
          // If initialization fails, retry after a short delay
          setTimeout(initVanta, 100);
        }
      } else {
        // Scripts not ready yet, retry
        setTimeout(initVanta, 50);
      }
    };

    // Initialize immediately since scripts are now synchronous
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
        <div className="relative z-20 h-full flex items-center justify-center lg:justify-start">
          {/* Content positioned 20% from left on desktop, centered on mobile */}
          <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:ml-[20%] lg:px-0 h-full">
            {/* Logos section */}
            <div className="mb-4 sm:mb-6 lg:mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8">
                {/* a16z and SF Tech Week grouped together */}
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  <Image
                    src="/logos/image 2.png"
                    alt="a16z logo"
                    width={180}
                    height={90}
                    className="rounded-lg"
                  />
                  
                  <Image
                    src="/logos/image 4.png"
                    alt="SF Tech Week logo"
                    width={180}
                    height={90}
                    className="rounded-lg"
                  />
                </div>

                {/* X symbol */}
                <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white drop-shadow-lg">×</div>
                
                {/* UC Berkeley Logo */}
                <Image
                  src="/logos/yellowberk.jpg"
                  alt="Cal logo"
                  width={180}
                  height={90}
                  className="rounded-lg"
                />
              </div>
                
                {/* Hackathon text */}
                <div className="text-center mt-3 sm:mt-4 lg:mt-12">
                  <h1 className="text-2xl sm:text-3xl lg:text-8xl font-bold text-white drop-shadow-lg">Hackathon</h1>
                </div>
              </div>

              {/* Date and time section */}
              <div className="mb-4 sm:mb-6 lg:mb-16 text-center">
                <div className="text-sm sm:text-base lg:text-2xl font-bold text-white mb-1">7pm - 12am</div>
                <div className="text-base sm:text-lg lg:text-3xl font-bold text-white mb-2">10 / 9 / 2025</div>
              </div>

            {/* Register button */}
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none">
              <a 
                href="https://partiful.com/e/5lvjTXL4wXzrRyIsYMxW?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-16 lg:py-8 rounded-full text-base sm:text-lg lg:text-3xl font-semibold active:scale-95 lg:hover:scale-105 transition-transform duration-300 shadow-xl text-center min-h-[44px] flex items-center justify-center" 
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
