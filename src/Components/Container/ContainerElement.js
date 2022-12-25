import styled from "styled-components";
import { MdArrowForwardIos } from 'react-icons/md'


export const InfoContainer = styled.div`
    color: #fff;
    background: linear-gradient(72.22deg, #EB2A2E 0%, #CF1863 100%);
    height: 560px;
    overflow: hidden;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    height: 550px;
    width: 100%;
    z-index: 1;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    padding-top: 5rem;
    justify-content: center;

    @media screen and (max-width: 480px)
    {
        padding-top: 0rem;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => imgStart ? `'col2 col1'` : `'col1 col2'`};
    gap: 1rem;


    @media screen and (max-width: 768px)
    {
        grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
        gap: 0;
    }

    @media screen and (min-width: 1440px)
    {
        gap: 10rem;
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    z-index: 1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    z-index: 1;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`

export const Heading = styled.h1`
    margin-bottom: 8px;
    font-size: 36px;
    line-height: 1.3;
    font-weight: 600;
    color: #fff;
    letter-spacing: 2%;
    font-style: normal;

    @media screen and (max-width:480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 420px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    color: #fff;
    margin-bottom: 2rem;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const Vector = styled.img`
    position: relative;
    margin-top: -60rem;
    transform: translate(-10%,30%);

    @media screen and (min-width:1441px){
        transform: translate(40%,30%);
    }
`

export const VectorTop = styled.img`
    position: relative;
    width: 326px;
    height: 79.68px;
    right: -61.8rem;
    top: -38.5rem;

    @media screen and (min-width:1441px){
        right: -8.8rem;
        top: -34rem;
    }

    @media screen and (max-width:1280px){
        right: -44.8rem;
        top: -39rem;
    }

    @media screen and (max-width:480px){
        display: none;
    }
`

export const VectorBottom = styled.img`
    position: relative;
    width: 222px;
    height: 57px;
    left: -18.8rem;
    bottom: 8.5rem;

    @media screen and (min-width:1441px){
        left: -67.8rem;
        bottom: 4rem;
    }

    @media screen and (max-width:480px){
        display: none;
    }
`

export const Button = styled.div`
    display: flex;
    align-items: center;
`

export const ButtonEnroll = styled.div`
    border-radius: 6px;
    background: #ffffff;
    white-space: nowrap;
    padding: 12px 22px;
    color: #E74243;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline;

    &:after{
        content: ">";
        margin-right: '1rem';
    }
`