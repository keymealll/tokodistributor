import styled from "styled-components";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'linear-gradient(72.22deg, #EB2A2E 0%, #CF1863 100%);' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled.img`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    max-width: 200px;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled.div`
    border-radius: 6px;
    background: #ffffff;
    white-space: nowrap;
    padding: 8px 16px;
    color: #E74243;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    margin-right: 106px;


    @media screen and (min-width: 1440px){
        margin-right: 45px;
    }
`

