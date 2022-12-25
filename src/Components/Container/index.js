import React from 'react'
import Image1 from '../Assets/Image1'
import Lines from '../../Images/Vector.svg'
import Vector1 from '../../Images/Vector1.svg'
import Vector2 from '../../Images/Vector2.svg'
import { ButtonEnroll, Column1, Column2, Heading, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, Vector, VectorBottom, VectorTop } from './ContainerElement'


export default function Container() {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <Heading>Reselling Lebih Untung dengan Penghasilan Lebih dari 10jt/bulan</Heading>
                            <Subtitle>Dapatkan Harga khusus premium yang lebih murah hingga 60%+ dengan menjadi reseller premium</Subtitle>
                            <ButtonEnroll>
                                Daftar Sekarang&nbsp;&nbsp;
                            </ButtonEnroll>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Image1 />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
            <Vector src={Lines} id='line' />
            <VectorTop src={Vector1} />
            <VectorBottom src={Vector2} />
        </InfoContainer>
    )
}
