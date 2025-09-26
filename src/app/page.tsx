import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home(): React.ReactElement {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-8' style={{backgroundColor: '#222222'}}>
      <div className='w-full max-w-4xl mx-auto text-center space-y-8'>
        {/* a16z Image */}
        <div className='flex justify-center'>
          <Image
            src='/logos/sftechs.png'
            alt='a16z logo'
            width={400}
            height={200}
            className='w-full max-w-md md:max-w-lg h-auto'
            priority
          />
        </div>

        {/* Body Text */}
        <div className='space-y-4 max-w-xl mx-auto'>
          <p className='text-sm md:text-base text-gray-300 leading-relaxed'>
            Not for beginners. For the top 100 makers at Berkeley. If you make stuff happen, apply! Prizes are from top sponsors.
          </p>
        </div>

        {/* Apply Button */}
        <div className='flex justify-center'>
          <Button asChild className='bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg font-semibold'>
            <a 
              href='https://docs.google.com/forms/d/e/1FAIpQLSf-JnzyEhiOV02AyvI91v7GmKoTcDbZgu_HI6b5Bof11B2Cdg/viewform'
              target='_blank'
              rel='noopener noreferrer'
            >
              Apply Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}