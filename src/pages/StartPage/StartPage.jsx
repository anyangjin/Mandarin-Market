import React from "react";
import { styledWrapper } from "../../styles/CommonStyle.js";
import { styled } from "styled-components";
import OrangeImg from "../../assets/mainorange.png";
import KakaoImg from "../../assets/kakao.png";
import GoogleImg from "../../assets/google.png";
import FacebookImg from "../../assets/facebook.png";

export default function LoginPage() {
  return (
    <StyledWrapper>
      <StyledBoxWrapper>
        <StyledContentsBox>
          <StyledOrange>
            <img src={OrangeImg} alt="OrangeImg" />
          </StyledOrange>
          <StyledLoginBox>
            <StyledKakao>
              <img className="snsicon" src={KakaoImg} alt="KakaoImg" />
              카카오톡 계정으로 로그인
            </StyledKakao>
            <StyledGoogle>
              <img className="snsicon" src={GoogleImg} alt="GoogleImg" />
              구글 계정으로 로그인
            </StyledGoogle>
            <StyledFacebook>
              <img className="snsicon" src={FacebookImg} alt="FacebookImg" />
              페이스북 계정으로 로그인
            </StyledFacebook>
            <StyledEmailJoinBox>
              <div>이메일로 로그인</div>
              <div>ㅣ</div>
              <div>회원가입</div>
            </StyledEmailJoinBox>
          </StyledLoginBox>
        </StyledContentsBox>
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
  display: flex;
  height: 100%;
  max-height: 848px;
  width: 390px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: inset 0 0 10px cyan;
  background-color: #ea7f42;
`;

const StyledContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding: 0px 20px; */
  /* padding-right: 20px; */
`;

const StyledOrange = styled.div`
  margin-top: 240px;
  margin-left: 123px;
  margin-right: 123px;
  margin-bottom: 177px;
`;

const StyledLoginBox = styled.div`
  width: 390px;
  height: 362px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

const StyledLogincontents = styled.div`
  width: 322px;
  height: 44px;
  border-radius: 44px;
  color: var(--767676, #767676);
  text-align: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 45px;
  .snsicon {
    float: left;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 14px;
  }
`;

const StyledKakao = styled(StyledLogincontents)`
  border: 1px solid var(--yellow, #f2c94c);
  margin-top: 0px;
`;
const StyledGoogle = styled(StyledLogincontents)`
  border: 1px solid var(--767676, #767676);
`;
const StyledFacebook = styled(StyledLogincontents)`
  border: 1px solid var(--blue-2, #2d9cdb);
`;

const StyledEmailJoinBox = styled.div`
  display: flex;
  color: var(--767676, #767676);
  font-size: 12px;
  font-weight: 400;
  margin-top: 20px;
`;
