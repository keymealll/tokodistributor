import styled, { css } from 'styled-components'


export const Img = styled.img`
    width: 370px;
`

export const ImageContainer = styled.div`
    position: relative;
    margin-top: -8rem;


    @media screen and (min-width: 480px)
    {
        margin-left: 3rem;
    }
`

export const HoverImg = styled.img`
    position:relative;
    z-index: 10;
    width: 110px;
    height: 130px;
    right: -15rem;
    bottom: -15rem;

    ${props => props.Hover2 && css`
    left: -6rem;
    bottom: -16rem;
    right: 0rem;
  `}

    ${props => props.Hover3 && css`
    left: -14rem;
    bottom: -26rem;
    right: 0rem;
  `}

`