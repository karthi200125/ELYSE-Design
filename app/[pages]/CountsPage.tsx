import CountUp from "../components/CountUp"

const CountsPage = () => {
    return (
        <section style={{ fontFamily: 'Homand' }} className="w-full h-screen pad snap-start py-10 flex flex-col">

            {/* first */}
            <div className="flex-1 w-full flex justify-end items-center gap-20">
                <div>
                    <h1 className="text-[150px] leading-0">
                        <CountUp from={0} to={60} duration={3} />
                        <span className="text-xl">%</span></h1>
                    <p className="mt-2">Green spaces <br /> for traqulity & wellness</p>
                </div>
                <div>
                    <h1 className="text-[150px] leading-0">
                        <CountUp from={0} to={30} duration={3} />
                        <span className="text-xl"></span></h1>
                    <p className="mt-2">Exclusive residences <br /> each toilered for comfort <br /> & elegance</p>
                </div>
            </div>

            {/* middle */}
            <div className="w-full flex-1 flex justify-start items-center">
                <div>
                    <h1 className="text-[150px] leading-0">
                        <CountUp from={0} to={150} duration={3} />k
                        <span className="text-2xl">sq. ft.</span></h1>
                    <p className="mt-2">of meticlously designed <br />  living space</p>
                </div>
            </div>

            {/* bottom */}
            <div className="w-full flex flex-1 justify-center items-center">
                <div>
                    <h1 className="text-[150px] leading-0">24/7 <span className="text-xl"></span></h1>
                    <p className="mt-2">conlerge services  , meeting <br /> every need effortlessly</p></div>
            </div>

        </section>
    )
}

export default CountsPage