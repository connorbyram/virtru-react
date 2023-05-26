import './Nav.css';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';

export default function Nav() {
    const [menu, setMenu] = useState(false);
    const [hover, setHover] = useState(false);

    function handleSetMenu() {
        setTimeout(function() {
            if (hover === false) {
                setMenu(!menu);
            }
        }, 2000)
    }

    function handleHover() {
        setHover(!hover)
    }


    return (
        <nav>
            <div className="container flex">
                <a href="/"><img className='brand' src="https://www.virtru.com/hubfs/virtru2022/images/VirtruLogoBlue.svg" alt="virtru logo" /></a>
                <div className="nav-links">
                    <a href="/" onMouseEnter={handleSetMenu} onMouseLeave={handleSetMenu}>Products</a>
                    <a href="/">Solutions</a>
                    <a href="/">Developers</a>
                    <a href="/">Company</a>
                    <a href="/">Resources</a>
                    <a href="/">Support</a>
                    <a href="/">Pricing</a>
                    <a href="/" className='button'>Book a Demo</a>
                </div>
            </div>
            {menu && (
                <Dropdown onMouseEnter={handleHover} onMouseLeave={handleHover} />
            )}
        </nav>
    )
}