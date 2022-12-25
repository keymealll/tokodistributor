import React from 'react'
import Image2 from '../../Images/Image2.png'
import { Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper } from './Container2Elements'


export default function Container2() {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <Heading>Harga lebih murah <br />hingga 60%+</Heading>
                            <Subtitle>Dapatkan harga khusus Reseller Premium yang lebih murah hingga 60%+ dari harga normal. Dengan harga lebih murah tentunya margin kamu bisa lebih besar, dong!</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={Image2} alt='image2' />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}
