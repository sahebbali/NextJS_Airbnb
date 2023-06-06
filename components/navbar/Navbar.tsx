'use client'
import Container from "../Conitainer";
import Logo from "./Logo";
import Serarch from "./Serarch";
import UserMenu from "./UserMenu";
const Navbar =()=>{
return(
    <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex flex-row items-center justify-between gap-3md:gap-0" >
                    <Logo />
                   <Serarch />
                   <UserMenu />
                </div>
               
            </Container>
        </div>
    </div>
)
}
export default Navbar;