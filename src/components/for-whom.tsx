import Image from "next/image";

export default function ForWhom() {
  return (
    <section id="for-whom">
        <div className="-mt-4 z-[15] relative bg-gradient-to-r from-[#7F8FBE] to-[#4862A8] w-full py-16">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex flex-col items-center justify-center gap-4 mb-8 lg:mb-12">
                    <h1 className="text-white text-3xl lg:text-5xl text-center max-w-4xl font-bold leading-tight">For Whom</h1>
                    <p className="text-white text-lg text-center max-w-xl font-semibold leading-relaxed">Discover an easy way to detect and monitor dental health for everyone you care about.</p>
                </div>
            </div>
        </div>
        <div className="max-w-6xl mx-auto px-8 -mt-16 z-[20] relative">
            <div className="z-[10] flex flex-wrap justify-center lg:justify-between items-center">
                <div data-aos="fade-up" data-aos-delay="100">
                    <div className="p-6 max-w-xs flex flex-col gap-4 bg-white rounded-2xl mb-6 lg:mb-0 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
                        <p className="text-2xl font-semibold">Parents</p>
                        <p className="text-justify">Help monitor your childrens dental health with early cavity detection and regular care schedules.</p>
                        <div className="h-48 w-full">
                            <Image className="w-full h-full object-cover object-top" src={"/parents.jpg"} width={400} height={300} alt="for-whom-parents"/>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <div className="p-6 max-w-xs flex flex-col gap-3 bg-white rounded-2xl mb-6 lg:mb-0 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
                        <p className="text-2xl font-semibold">Adults</p>
                        <p className="text-justify">Prevent further dental issues with regular check-ups and early cavity detection.</p>
                        <div className="h-48 w-full">
                            <Image className="w-full h-full object-cover object-top" src={"/adults.jpg"} width={400} height={300} alt="for-whom-adults"/>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                    <div className="p-6 max-w-xs flex flex-col gap-3 bg-white rounded-2xl mb-6 lg:mb-0 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
                        <p className="text-2xl font-semibold">Elderly Caregivers</p>
                        <p className="text-justify">Simplify dental health monitoring for elderly parents or relatives with the right detection and care tools.</p>
                        <div className="h-48 w-full">
                            <Image className="w-full h-full object-cover object-top" src={"/elderly.jpg"} width={400} height={300} alt="for-whom-delderly"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}