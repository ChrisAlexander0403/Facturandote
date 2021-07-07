import React, { useState } from 'react'
import { Nav, NavLinkLogo, NavLink, Bars, Close, NavMenu, NavBtnLink, Image } from './NavBarElements';
import FacturandoteLogo from '../../FacturandoteLogo.png';

export default function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const Factura = () => {
        window.location.href = "http://facturandote.com/timfac/view/loguin/liguin.php";
    }
    return (
        <>
            <Nav>
                <NavLinkLogo to="/" onClick={closeMobileMenu}>
                    <Image src={FacturandoteLogo} />
                </NavLinkLogo>
                <div onClick={handleClick}>
                    {click ? <Close /> : <Bars />}
                </div>
                <NavMenu className={click ? 'active' : null}>
                    <NavLink to="/About" onClick={closeMobileMenu}>
                        ¿Quiénes Somos?
                    </NavLink>
                    <NavLink to="/Services" onClick={closeMobileMenu}>
                        Servicios
                    </NavLink>
                    <NavLink to="/Contact" onClick={closeMobileMenu}>
                        Contacto
                    </NavLink>
                    <NavLink to="/DistributorAccess" onClick={closeMobileMenu}>
                        Conviértete en Distribuidor
                    </NavLink>
                    <NavBtnLink onClick={Factura}>Factura Aquí</NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    );
}