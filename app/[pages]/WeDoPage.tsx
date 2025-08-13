import Image from "next/image"
import demo from '@/app/assets/demo.jpg'
import DesignCard from '@/app/components/DesignCard'

const WeDoPage = () => {
    return (
        <section className="snap-start w-full h-screen pad relative py-5">

            <Image
                src={demo}
                alt=""
                fill
                className="w-full h-full object-cover filter brightness-40 absolute top-0 left-0"
            />

            <div className="grid grid-cols-4 w-full h-full gap-10">
                <DesignCard />
                <DesignCard />
                <div />
                <div />
                <DesignCard />
                <div />
                <DesignCard />
                <DesignCard />
            </div>

        </section>
    )
}

export default WeDoPage