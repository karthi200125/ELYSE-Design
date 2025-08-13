import demo from '@/app/assets/demo.jpg'
import Button from "../components/Button"
import CustomImage from "../components/CustomImage"

const BeliefPage = () => {
    return (
        <section className="snap-start w-full h-screen pad">
            <div className="flex flex-row w-full h-full relative">

                <h1 style={{ fontFamily: 'Harmond' }} className="absolute top-20 left-1/2 -translate-x-1/2 z-10 text-[70px] leading-20 italic">A VISION OF <br /> INSPIRED LIVING</h1>

                <CustomImage
                    src={demo}
                    alt="Main image"
                    className="flex-1 w-full h-full"
                />

                <div className="flex-1 w-full h-full flex flex-row">
                    <div className="flex-1"></div>
                    <div className="flex-1 h-full flex flex-col justify-between">
                        <h3>(OUR BELEIFS)</h3>
                        <div className="space-y-5 text-xs mb-[100px] w-[70%]">
                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fuga ipsum unde voluptatum accusamus veritatis asperiores eum soluta! Molestiae, tenetur?</p>
                            <Button>LEARN MORE</Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BeliefPage