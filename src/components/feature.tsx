import Image from "next/image";

export default function Feature() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-[#20253A] text-3xl lg:text-5xl text-center max-w-4xl font-bold leading-tight">Features</h1>
            <p className="text-[#20253A] text-lg text-center max-w-2xl font-semibold leading-relaxed">Discover a range of smart features designed to make dental care easy, from AI-powered cavity detection to seamless clinic appointments and personalized dental care tips.</p>
        </div>
        <div className="flex flex-col gap-8 pt-16 lg:pb-16 pb-8">
            <div className="flex flex-wrap">
                <div data-aos="fade-up-right" className="w-full lg:w-1/2 relative">
                    <Image className="absolute z-0 max-w-80 lg:max-w-none left-0 lg:-left-12" src={"/polygon.png"} width={500} height={500} alt="polygon"/>
                    <div className="w-full flex flex-wrap justify-center">
                        <Image className="max-h-96 lg:max-h-none w-auto lg:w-80 z-[10]" src={"/capture.png"} width={600} height={600} alt="features-capture"/>
                    </div>
                </div>
                <div data-aos="fade-up-left" className="w-full lg:w-1/2 flex flex-col gap-3 lg:gap-4 justify-center p-8 text-center lg:text-left">
                    <h2 className="text-2xl lg:text-4xl font-semibold">Capture</h2>
                    <p className="w-full h-0.5 bg-[#ACB0CB]"></p>
                    <p className="text-[#20253A] max-w-2xl font-semibold leading-relaxed">Detect caries early with the AI-powered photo analysis feature. Simply take a picture of your teeth, and let the app analyze and identify potential cavities for timely treatment.</p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div data-aos="fade-up-left" className="w-full lg:w-1/2 relative order-1 lg:order-2">
                    <Image className="absolute z-0 max-w-80 lg:max-w-none lg:-right-8 lg:top-20" src={"/polygon.png"} width={500} height={500} alt="polygon"/>
                    <div className="w-full flex flex-wrap justify-center">
                        <Image className="max-h-96 lg:max-h-none w-auto lg:w-72 z-[10]" src={"/chatbot.png"} width={500} height={500} alt="features-capture"/>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="w-full lg:w-1/2 flex flex-col gap-3 lg:gap-4 justify-center p-8 text-center lg:text-left order-2 lg:order-1">
                    <h2 className="text-2xl lg:text-4xl font-semibold">Chatbot</h2>
                    <p className="w-full h-0.5 bg-[#ACB0CB]"></p>
                    <p className="text-[#20253A] max-w-2xl font-semibold leading-relaxed">Get instant answers to your dental health questions with our smart chatbot, available 24/7 to provide guidance and support.</p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div data-aos="fade-up-right" className="w-full lg:w-1/2 relative">
                    <Image className="absolute z-0 max-w-80 lg:max-w-none left-0 lg:-left-12" src={"/polygon.png"} width={500} height={500} alt="polygon"/>
                    <div className="w-full flex flex-wrap justify-center">
                        <Image className="max-h-96 lg:max-h-none w-auto lg:w-80 z-[10]" src={"/daily.png"} width={600} height={600} alt="features-capture"/>
                    </div>
                </div>
                <div data-aos="fade-up-left" className="w-full lg:w-1/2 flex flex-col gap-3 lg:gap-4 justify-center p-8 text-center lg:text-left">
                    <h2 className="text-2xl lg:text-4xl font-semibold">Daily Notes</h2>
                    <p className="w-full h-0.5 bg-[#ACB0CB]"></p>
                    <p className="text-[#20253A] max-w-2xl font-semibold leading-relaxed">Track your daily dental habits with ease. Record your brushing routine, dietary intake, and other important activities to maintain optimal oral hygiene.</p>
                </div>
            </div>
        </div>
        <div className="mx-auto">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-[#20253A] text-3xl lg:text-5xl text-center max-w-4xl font-bold leading-tight">Other Features</h1>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between items-center pt-8 lg:py-4">
                <div data-aos="fade-up" data-aos-delay="100">
                    <div className="p-6 max-w-xs flex flex-col gap-4 bg-white rounded-2xl mb-6 lg:mb-0 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out border">
                        <p className="text-2xl font-semibold">Blog</p>
                        <p className="w-full h-0.5 bg-[#ACB0CB]"></p>
                        <p className="text-justify">Stay informed with expert articles, tips, and guides on dental care, oral health, preventive practices, and the latest advancements in modern dentistry.</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <div className="p-6 max-w-xs flex flex-col gap-3 bg-white rounded-2xl mb-6 lg:mb-0 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out border">
                        <p className="text-2xl font-semibold">Checkup</p>
                        <p className="w-full h-0.5 bg-[#ACB0CB]"></p>
                        <p className="text-justify">Schedule appointments effortlessly with your preferred dental clinics. Manage your bookings, receive reminders, and keep track of all your dental visits in one place.</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                    <div className="p-6 max-w-xs flex flex-col gap-3 bg-white rounded-2xl mb-6 lg:mb-0 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out border">
                        <p className="text-2xl font-semibold">Interactive AR</p>
                        <p className="w-full h-0.5 bg-[#ACB0CB]"></p>
                        <p className="text-justify">Engage your child with fun, augmented reality experiences that teach proper brushing techniques, turning dental care into an exciting daily adventure.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}