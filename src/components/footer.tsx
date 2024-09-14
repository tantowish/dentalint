import Link from "next/link";
import { ButtonAlert } from "./button-alert";
import Image from "next/image";

export default function Footer() {
  return (
    <>
        <div className="px-8 flex flex-col gap-4 lg:gap-8 justify-center items-center bg-gradient-to-r from-[#7F8FBE] to-[#4862A8] w-full py-16 h-60 lg:h-96">
            <h1 className="text-white text-2xl lg:text-5xl text-center">Download Dentalint Now!</h1>
            <ButtonAlert className='px-10 lg:px-14 py-4 bg-white rounded-full text-[#394E85] text-xl font-bold hover:bg-[#c5cfeb] transition-all' value="Get App"/>
        </div>
        <div className="px-8 py-6 max-w-6xl mx-auto">
            <div className="flex flex-wrap flex-col gap-8 lg:flex-row lg:justify-between lg:items-center">
                <Link
                href="#"
                className='flex flex-wrap gap-2 items-center'
                >
                    <Image
                    className='w-8 lg:w-9'
                    src="/dentalint-logo.png"
                    alt='dentalint-logo'
                    width={288}
                    height={162}
                    />
                    <p className='text-[#394E85] font-bold text-xl lg:text-2xl'>Dentalint</p>
                    </Link> 
                <div className="flex flex-wrap gap-8">
                    <p className="text-[#394E85]">Develop by CEMERLANG</p>
                    <p className="text-[#394E85]">Langit | Tantowi | Annisa</p>
                </div>
                <div className="text-[#394E85]">Universitas Gadjah Mada</div>
            </div>
        </div>
    </>
  )
}