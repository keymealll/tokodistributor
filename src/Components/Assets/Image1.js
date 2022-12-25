import React from 'react'
import image1 from '../../Images/image-1.svg'
import Hover1 from '../../Images/Hover1.svg'
import Hover2 from '../../Images/Hover2.svg'
import Hover3 from '../../Images/Hover3.svg'
import { HoverImg, Img, ImageContainer } from './AssetsElements'

export default function Image1() {
    return (
        <ImageContainer>
            <HoverImg src={Hover1} alt='button' />
            <HoverImg src={Hover2} alt='button' Hover2 />
            <HoverImg src={Hover3} alt='button' Hover3 />
            <Img src={image1} alt='orang' />
        </ImageContainer>
    )
}
