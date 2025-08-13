import Image from "next/image"
import aboutimage from '@/app/assets/about.jpg'
import CustomImage from "../components/Button"

const About = () => {
    return (
        <section className="w-full h-screen flex flex-row items-start gap-10 justify-between snap-start pad py-10">

            {/* first column */}
            <div style={{ fontFamily: 'Harmond' }} className="flex-1 flex flex-col justify-between h-full">
                <h3>(ABOUT)</h3>
                <h2 className="leading-15">TIMELESS DESIGN WELLNESS FOCUSED LIVING</h2>
            </div>

            {/* second column */}
            <CustomImage
                className="flex-1 h-full"
                src={aboutimage}
                alt="about image"
            />

            {/* Third column */}
            <div className="flex-1 h-full text-sm space-y-10 pl-20">
                <p>Every element of Elyse Residence reflects a commitment to excellence — from the timeless elegance of its interiors to the thoughtfully curated amenities, the property embodies a holistic approach to luxury living. </p>
                <p>Wherever you're seeking a sincere, vibrant cultural hub that fosters personal growth, Elyse Residence offers it all. </p>
                <button className="rounded-full py-2 px-3 bg-white text-black">LEARN MORE</button>
            </div>

        </section>
    )
}

export default About