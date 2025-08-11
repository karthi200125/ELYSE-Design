import ImageCarousel from "../components/ImageCarasoul"

const ProjectsPage = () => {
    return (
        <section className="snap-start w-full h-screen pad flex flex-col justify-between py-10">

            <h2>(OUR PROJECTS)</h2>

            <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
                <h1 className="z-10 absolute top-0 left-1/2 -translate-x-1/2 text-[80px] leading-none text-center">LUMIERE DUPLEX RESIDENCY</h1>
                <ImageCarousel />
            </div>


            <div className="w-full flex flex-row items-center justify-center ">
                <div className="flex flex-row items-center gap-10 w-[30%] text-xs">
                    <p className="text-neutral-400 w-[62%]">Two-story luxury apartments that feature sunlit living spaces, private terraces, and a selection of exclusive amenities.</p>
                    <button className="rounded-full py-2 px-3 bg-white text-black ">LEARN MORE</button>
                </div>
            </div>

        </section>
    )
}

export default ProjectsPage