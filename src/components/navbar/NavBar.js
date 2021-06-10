import React, {useState} from 'react'
import {Nav, NavLinkLogo, NavLink, Bars, Close, NavMenu, NavBtnLink, Image} from './NavBarElements';
import FacturandoteLogo from '../../FacturandoteLogo.png';

export default function NavBar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <Nav>
                <NavLinkLogo to="/">
                <Image src={FacturandoteLogo} />
                </NavLinkLogo>
                <div onClick={handleClick}>
                    {click ? <Close/> : <Bars/>}
                </div>
                <NavMenu className={click ? 'active' : null}>
                    <NavLink to="/About" activeStyle onClick={closeMobileMenu}>
                        ¿Quiénes Somos?
                    </NavLink>
                    <NavLink to="/Services" activeStyle onClick={closeMobileMenu}>
                        Servicios
                    </NavLink>
                    <NavLink to="/Contact" activeStyle onClick={closeMobileMenu}>
                        Contacto
                    </NavLink>
                    <NavLink to="/DistributorAccess" activeStyle onClick={closeMobileMenu}>
                        Acceso a Distribuidores
                    </NavLink>
                    <NavBtnLink to="/Factura">Factura Aquí</NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    );
}