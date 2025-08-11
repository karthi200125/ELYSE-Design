import Image from "next/image"
import demo from '@/app/assets/demo.jpg'

const BeliefPage = () => {
    return (
        <section className="snap-start w-full h-screen pad py-5">
            <div className="flex flex-row w-full h-full relative">

                <h1 style={{ fontFamily: 'Harmond' }} className="absolute top-20 left-1/2 -translate-x-1/2 z-10 text-[70px] leading-20">A VISION OF <br /> INSPIRED LIVING</h1>

                <div className="flex-1 w-full h-full relative">
                    <Image
                        src={demo}
                        alt="Main image"
                        fill
                        className="absolute top-0 left-0 w-full h-full object-cover filter brightness-75"
                    />
                </div>

                <div className="flex-1 w-full h-full flex flex-row">
                    <div className="flex-1"></div>
                    <div className="flex-1 h-full flex flex-col justify-between">
                        <h2>(OUR BELEIFS)</h2>
                        <div className="space-y-5 text-xs mb-[100px] w-[70%]">
                            <p className="text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fuga ipsum unde voluptatum accusamus veritatis asperiores eum soluta! Molestiae, tenetur?</p>
                            <button className="rounded-full py-2 px-3 bg-white text-black ">LEARN MORE</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BeliefPage