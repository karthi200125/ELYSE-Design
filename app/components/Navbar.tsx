import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="h-[80px] border-b-[1px] border-solid border-neutral-400 w-full flex flex-row items-center justify-between ">
            <div style={{ fontFamily: 'Harmond' }} >ELYSE</div>
            <div className="flex flex-row items-center gap-20 text-xs">
                <div>EN - DE </div>
                <div className="gap-5 flex flex-row items-center text-[10px] leading-1.5">
                    <button className="rounded-full py-2 px-3 bg-white text-black">BOOK A VISIT</button>
                    <BiMenuAltRight
                        size={30}
                        className="cursor-pointer text-neutral-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar