import demo from '@/app/assets/demo.jpg'
import Button from "../components/Button"
import CustomImage from "../components/CustomImage"

const AmenetisPage = () => {
    return (
        <section className="snap-start w-full h-screen pad flex flex-row relative">

            <div className="flex-1 h-full flex items-start justify-center flex-col gap-5">
                <h2 style={{ fontFamily: 'Harmond' }} className="w-[40%] leading-15">WELLNESS CENTERED AMENTIES</h2>
                <p className="w-[40%]" >From private fitness studios to guided maintenance sessions and outdoor activities, all are designed to enhance your well-being and foster a sense of harmony.</p>                
                <Button>LEARN MORE</Button>
            </div>

            <CustomImage
                src={demo}
                alt=""
                className="!absolute top-1/2 left-1/2 -translate-1/2 w-[300px] h-[400px] z-10"
            />

            <CustomImage
                src={demo}
                alt=""
                className="flex-1 w-full h-full"
                img_cls="filter brightness-50"
            />

        </section>
    )
}

export default AmenetisPage