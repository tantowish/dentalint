'use client'

import { Button } from '@/components/ui/button';
import { steps } from '@/data/ar';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [whichStep, setWhichStep] = useState(1)
  const [hasCameraAccess, setHasCameraAccess] = useState(true);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing the camera", err);
        setHasCameraAccess(false);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      {hasCameraAccess ? (
          <div className='h-screen'>
            <div className='h-[20%]'>
                <div className='flex flex-wrap justify-between px-4 pt-8 pb-4'>
                    {steps.map(step => (
                        <div className={`rounded-full border-2 border-[#394E85] text-[#394E85] h-9 w-9 flex justify-center items-center ${step.step == whichStep ? "bg-[#394E85] text-white" : ""}`}>{step.step}</div>
                    ))}
                </div>
                <p className='text-center px-4'>{steps[whichStep-1].description}</p>
            </div>
            <div className="relative h-[70%]">
                <div className="flex justify-center items-center w-full h-full absolute">
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover rounded-lg bg-black transform scale-x-[-1]"
                    />
                </div>
                <div className='absolute w-full h-full flex justify-center items-center'>
                    { whichStep === 7 ? 
                        <Image
                        loading='eager'
                        style={{ bottom: "15%"}}
                        src={`/ar/7.png`}
                        width={128}
                        height={128}
                        alt='Step Image'
                        className='absolute z-10'
                        />
                    :
                        <Image
                        loading='eager'
                        style={{ bottom: whichStep === 6 ? '10%' : '15%' }}
                        src={`/ar/${whichStep}.${whichStep >= 7 ? 'png' : 'gif'}`}
                        width={256}
                        height={256}
                        alt='Step Image'
                        className='absolute z-10'
                        />
                    }
                    
                    {whichStep > 1 && whichStep < 7 && (
                    <Image
                        loading='eager'
                        src={"/ar/face.png"}
                        width={312}
                        height={312}
                        alt='Face Overlay'
                        className='absolute z-20'
                    />
                    )}
                </div>
            </div>
            <div className='h-[10%] w-full flex justify-center items-center'>
                <div className='flex flex-wrap gap-8'>
                    <button onClick={() => whichStep <= 1 ? setWhichStep(whichStep) : setWhichStep(whichStep - 1)} className='rounded-full px-8 py-3 bg-[#394E85] text-white hover:bg-[#4761a2] transition-all text-xl'>Back</button>
                    <button onClick={() => whichStep >= 8 ? setWhichStep(whichStep) : setWhichStep(whichStep + 1)} className='rounded-full px-8 py-3 bg-[#394E85] text-white hover:bg-[#4761a2] transition-all text-xl'>Next</button>
                </div>
            </div>
          </div>
      ) : (
        <p className="text-center text-red-500">
          Unable to access the camera. Please check your permissions
        </p>
      )}
    </div>
  );
}
