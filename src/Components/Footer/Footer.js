import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import Logo from '../../Images/Logo.svg'
import Line from '../../Images/VectorFooter.svg'
import { Btn, GooglePlayButton } from '../Button/ButtonElements'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, Vector } from './FooterElements'

const Footer = () => {

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialLogo src={Logo} />
                <WebsiteRights>Unduh Aplikasi Tokodistributor</WebsiteRights>
                <Btn>
                    <GooglePlayButton>
                        GooglePlay
                    </GooglePlayButton>
                </Btn>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href='#' target='blank' aria-label='instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='#' target='blank' aria-label='youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='#' target='blank' aria-label='linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='#' target='blank' aria-label='facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            <Vector src={Line} />
        </FooterContainer>
    )
}

export default Footer
