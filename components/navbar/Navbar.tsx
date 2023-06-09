'use client'

import Container from "../Conitainer";
import Categories from "./Categories";
import Logo from "./Logo";
import Serarch from "./Serarch";
import UserMenu from "./UserMenu";
import { SafeUser } from '@/types';

interface NavbarProps{
    currentUser?: SafeUser | null;
}
const Navbar:React.FC<NavbarProps> =({currentUser})=>{
    console.log(currentUser);
return(

    <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex flex-row items-center justify-between gap-3md:gap-0" >
                    <Logo />
                   <Serarch />
                   <UserMenu currentUser={currentUser} />
                </div>
               
            </Container>
        </div>
        <Categories />
    </div>
)
}
export default Navbar;