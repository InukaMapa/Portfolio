import Link from 'next/link';
import { Button } from "./ui/button";

import Nav from './Nav';

const Header = () => {
    return (
    <header className="py-xl:py-12 text-white 0">
        <div className="container mx-auto">
            
                <Link href ="/">
                <h1 className="text-4xl font-semibold">
                    Inuka M Mapa<span className="text-accent">.</span>
                </h1>
                </Link>
            <div className="hidden xl:flex">
                 <Nav/>
                <Link href="/contact">
                <Button>Hire Me</Button>
                </Link>
            </div>
            </div>
    </header>
    );
};

export default Header;