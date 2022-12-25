import React, { useState, useEffect } from 'react'
import Logo from '../../Images/Logo.svg'
import { Nav, NavbarContainer, NavBtn, NavBtnLink, NavLogo, NavMenu } from './NavbarElements'

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' src={Logo} />
                    <NavMenu>
                        <NavBtn>
                            <NavBtnLink>Daftar Sekarang</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

