
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import demo from "@/app/assets/demo.jpg";

export default function LandingPage() {
    return (
        <div className="w-full h-screen snap-start relative overflow-hidden ">
            {/* Background Image (not affected by padding) */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                    alt="demo image"
                    src={demo}
                    fill
                    className="object-cover brightness-45"
                />
            </div>

            {/* Foreground content (with padding) */}
            <div className="relative z-10 w-full h-full px-10">
                <Navbar />
                <div className="absolute top-[60%] left-0 w-full flex flex-row items-start h-[45%] gap-10">
                    <h1 style={{ fontFamily: 'Harmond', letterSpacing: '-20px' }} className="w-[70%] text-[270px] pl-4 leading-none">
                        ELYSE
                    </h1>
                    <div className="w-[30%] pt-10 h-full space-y-5 ">
                        <h3>
                            HOLISTIC LUXURY
                            <br />
                            IN PERFECT HARMONY
                        </h3>
                        <p className="w-[50%]">
                            Welcome to Elyse Residence, where timeless design, wellness-focused living, and cultural apartments converge to create an unparalleled sanctuary of elegance and sincerity.
                        </p>
                        <span className="text-sm text-neutral-300 font-semibold">SCROLL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
