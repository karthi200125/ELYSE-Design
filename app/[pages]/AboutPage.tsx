import Image from "next/image"
import aboutimage from '@/app/assets/about.jpg'

const About = () => {
    return (
        <section className="w-full h-screen flex flex-row items-start gap-10 justify-between snap-start pad py-10">

            {/* first column */}
            <div style={{ fontFamily: 'Harmond' }} className="flex-1 flex flex-col justify-between h-full">
                <h2 className="italic">(ABOUT)</h2>
                <h1 className="text-[50px] leading-15 italic">TIMELESS DESIGN WELLNESS FOCUSED LIVING</h1>
            </div>

            {/* second column */}
            <div className="flex-1 relative overflow-hidden h-full">
                <Image
                    src={aboutimage}
                    alt="About Image"
                    fill
                    className="absolute top-0 left-0 w--full h-full object-cover"
                />
            </div>

            {/* Third column */}
            <div className="flex-1 h-full text-sm space-y-10 pl-20">
                <p className="text-neutral-400">Every element of Elyse Residence reflects a commitment to excellence — from the timeless elegance of its interiors to the thoughtfully curated amenities, the property embodies a holistic approach to luxury living. </p>
                <p className="text-neutral-400">Wherever you're seeking a sincere, vibrant cultural hub that fosters personal growth, Elyse Residence offers it all. </p>
                <button className="rounded-full py-2 px-3 bg-white text-black">LEARN MORE</button>
            </div>

        </section>
    )
}

export default About