import styled from "styled-components";

export default function Footer() {
    return (
        <FooterWrap>
            <span>@namYeJi9q React Project in 2023</span>
        </FooterWrap>
    );
}

const FooterWrap = styled.footer`
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    background-color: #000;
    color: #aaa;
    font-size: 11px;
`;
