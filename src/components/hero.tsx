import Image from "next/image";
import { ButtonAlert } from "./button-alert";

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto flex flex-wrap justify-center pt-24 lg:pt-32 px-4">
        <div className="flex flex-col items-center justify-center gap-4 mb-16">
            <h1 className="text-[#20253A] text-3xl lg:text-5xl text-center max-w-4xl font-bold leading-tight">Monitor and Maintain Your Familys Dental Health</h1>
            <p className="text-[#20253A] text-lg text-center max-w-2xl font-semibold leading-relaxed">Dentalint uses AI to detect cavities early, provide personalized care recommendations, and connects you directly with your preferred dental clinics.</p>
            <div>
                <ButtonAlert className='px-8 py-3 bg-[#394E85] rounded-full text-white text-xl font-bold hover:bg-[#4761a2] transition-all' value="Get App"/>
            </div>
        </div>
        <div className="relative w-full">
            <div className="flex flex-wrap justify-center">
                <Image className="z-[10] max-w-64 lg:max-w-none" src={"/hero.png"} width={400} height={400} alt="dentalint-hero"/>
                <Image className="absolute bottom-0 z-[0]" src={"/blop-hero.png"} width={900} height={600} alt="blop-hero"/>
            </div>
        </div>
    </section>
  )
}