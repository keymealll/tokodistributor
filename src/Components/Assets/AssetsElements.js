import styled, { css } from 'styled-components'


export const Img = styled.img`
    width: 370px;

    @media screen and (max-width: 480px){
      width: 315px;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    margin-top: -13rem;

    @media screen and (min-width: 480px)
    {
        margin-top: -8rem;
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

    @media screen and (max-width: 400px){
      right: -12rem;
      bottom: -21rem;
    }

    ${props => props.Hover2 && css`
    left: -6rem;
    bottom: -16rem;
    right: 0rem;
    
    @media screen and (max-width: 400px){
      bottom: -24rem;
    }
  `}

  ${props => props.Hover4 && css`
    left: 1rem;
    top: -15rem;
    right: 0rem;
    transform: rotate(31.54deg);
    width: 88px;
    height: 120px;

    @media screen and (max-width: 400px){
      left: 1rem;
      top: -12rem;
    }
  `}

  ${props => props.Hover5 && css`
    left: 10rem;
    top: -15rem;
    right: 0rem;
    transform: rotate(-66.15deg);

    @media screen and (max-width: 400px){
      left: 8rem;
      top: -12rem;
    }
  `}


    ${props => props.Hover3 && css`
    left: -14rem;
    bottom: -26rem;
    right: 0rem;

    @media screen and (max-width: 400px){
      left: 0rem;
      bottom: -24rem;
    }
  `}

`