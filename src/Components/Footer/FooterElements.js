import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: linear-gradient(71.13deg, #E0062E 9.02%, #CF1863 87.85%);
    overflow: hidden;
`

export const FooterWrap = styled.div`
    padding: 48px 36px;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    margin: 0 auto;
    z-index: 1;
`


export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const SocialLogo = styled.img`
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    width: 354.85px;
    margin-bottom: 0.5rem;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 36px;
`

export const SocialIcons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    margin-bottom: 0px;
`

export const SocialIconLink = styled.a`
    color: #E0062E;
    font-size: 24px;
    background-color: #fff;
    border-radius: 24rem;
    padding: 8px 8px 0px 8px;
    cursor: pointer;
`

export const Vector = styled.img`
    position: relative;
    margin: -26rem auto 0rem auto;
    display: block;
`