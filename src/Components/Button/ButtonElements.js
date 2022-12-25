import styled from 'styled-components'

export const Btn = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 1.3333333;
  border-radius: 6px;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;

  &:hover:focus{
    color: #333;
    text-decoration: none;
    outline: 0;
  }

  &:active{
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
`

export const GooglePlayButton = styled.a`
    color: #fff;
    background-color: #111;
    border-color: #000;
    padding: 19px 16px 10px 40px;
    position: relative;
    font-family: "Product Sans", Arial, sans-serif;
    font-weight: 600;
    z-index: 1;
    border-radius: 8px;

    &:focus{
    color: #fff;
    background-color: #555;
    border-color: #000;
    }

    &:active{
    color: #fff;
    background-color: #555;
    border-color: #000;
    }

    &:hover{
    color: #fff;
    background-color: #555;
    border-color: #000;
    }

      &:before{
    content: "";
    background-image: url(https://4.bp.blogspot.com/-52U3eP2JDM4/WSkIT1vbUxI/AAAAAAAArQA/iF1BeARv2To-2FGQU7V6UbNPivuv_lccACLcB/s30/nexus2cee_ic_launcher_play_store_new-1.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 6px;
    top: 50%;
    margin-top: -15px;
  }

  &:after{
    content: "GET IT ON";
    position: absolute;
    top: 5px;
    left: 40px;
    font-size: 10px;
    font-weight: 400;
  }
`

