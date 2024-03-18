import Link from "../Link/Link";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
    ];

    return (
        <nav>
            <div className="md:hidden text-2xl px-4 mt-2 bg-cyan-400" onClick={() => setOpen(!open)}>
                {
                    open == true ? <MdClose></MdClose> : <HiMenu></HiMenu>
                }
            </div>
            <ul className={`md:flex absolute md:static px-4  bg-cyan-400 duration-1000
                ${open ? 'top-10' : '-top-60'}
            `
            }>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;