import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    background: #fff;
    height: 560px;

    @media screen and (max-width: 768px){
        height: 100%;
        padding: 35px 0;
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
    padding-top: 2rem;
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
    color: #262626;
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
    color: #595959;
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
