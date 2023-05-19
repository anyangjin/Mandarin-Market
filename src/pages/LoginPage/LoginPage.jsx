import React from "react";
import { styled } from "styled-components";

export default function LoginPage() {
  return (
    <StyledWrapper>
      <StyledBoxWrapper>
        <StyledHeader>로그인</StyledHeader>
        <StyledEmailPwdBox>
          <StyledInputText>이메일</StyledInputText>
          <StyledInput placeholder="example@gmail.com" />

          <StyledInputText>비밀번호</StyledInputText>
          <StyledInput placeholder="비밀번호를 입력해주세요" type="password" />
        </StyledEmailPwdBox>
        <StyledLoginBtn>로그인</StyledLoginBtn>
        <StyledEmailJoinBtn>이메일로 회원가입</StyledEmailJoinBtn>
      </StyledBoxWrapper>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 10px deeppink;
  background-color: gray;
`;

const StyledBoxWrapper = styled.div`
  /* display: flex; */
  height: 100%;
  max-height: 848px;
  width: 390px;
  /* flex-direction: column;
  justify-content: space-between; */
  box-shadow: inset 0 0 10px cyan;
  background-color: #fff;
`;

export const StyledHeader = styled.div`
  margin-top: 54px;
  text-align: center;
  color: #000;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const StyledEmailPwdBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  display: flex;
  width: 322px;
  height: 48px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-style: none;
  border-bottom: 1px solid #aaaaaa;

  &::placeholder {
    color: #aaaaaa;
  }
`;

const StyledInputText = styled.span`
  color: var(--767676, #767676);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  align-self: flex-start;
  margin-left: 34px;
`;

const StyledLoginBtn = styled.button`
  width: 322px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 44px;
  background: #f26e22;
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0px 34px;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

const StyledEmailJoinBtn = styled.button`
  color: var(--767676, #767676);
  font-size: 12px;
  font-weight: 400;
  margin: 0px 149px;
  width: 92px;
  height: 15px;
  border: 0;
  background-color: transparent;
`;
