import React from "react";
import "./App.css";
import More from "./img/more.png";
import My from "./img/My.png";
import glog from "./img/glog.png";
import search from "./img/search.png";
import mic from "./img/mic.png";
import kbrd from "./img/keyboard.png";
import cam from "./img/camera.png";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Header>
        <NavList>
          <NavItem>
            <A href="https://mail.google.com/">Gmail</A>
          </NavItem>
          <NavItem>
            <A href="https://www.google.co.kr/imghp?hl=ko&ogbl">이미지</A>
          </NavItem>
          <NavItem>
            <Button>
              <Pic src={More} width="25" alt="More" />
            </Button>
          </NavItem>
          <NavItem>
            <Button>
              <Pic src={My} width="30" alt="My" />
            </Button>
          </NavItem>
        </NavList>
      </Header>

      <Up>
        <Logo src={glog} width="300"></Logo>
      </Up>
      <Middle>
        <Inbox>
          <Pic src={search} width="20"></Pic>
          <Input></Input>
          <Pic src={kbrd} width="24"></Pic>
          <Pic src={mic} width="24"></Pic>
          <Pic src={cam} width="24"></Pic>
          <Pic src={search} width="24"></Pic>
        </Inbox>
      </Middle>
      <Blank></Blank>

      <Box1>
        <NavList>
          <NavText>대한민국</NavText>
        </NavList>
      </Box1>
      <Box2>
        <NavList>
          <NavItem>
            <A href="https://about.google/?utm_source=google-KR&utm_medium=referral&utm_campaign=hp-footer&fg=1">
              Google 정보
            </A>
          </NavItem>
          <NavItem>
            <A href="https://ads.google.com/intl/ko_kr/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
              광고
            </A>
          </NavItem>
          <NavItem>
            <A href="https://www.google.com/intl/ko_kr/business/">비즈니스</A>
          </NavItem>
          <NavItem>
            <A href="https://www.google.com/search/howsearchworks/?fg=1">검색의 원리</A>
          </NavItem>
        </NavList>
        <NavList>
          <NavItem>
            <A href="https://policies.google.com/privacy?hl=ko&fg=1">개인정보 처리 방침</A>
          </NavItem>
          <NavItem>
            <A href="https://policies.google.com/terms?hl=ko&fg=1">약관</A>
          </NavItem>
          <NavItem>설정</NavItem>
        </NavList>
      </Box2>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const A = styled.a`
  text-decoration: none;
`;

const NavItem = styled.li`
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const NavText = styled.li`
  margin: 0 10px;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  border-radius: 30%;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Example shadow */
  }
  /* &:hover {
    box-shadow: 0px 4px 8px;
  } */
`;

const Pic = styled.img`
  border: 0;
  border-radius: 50%;
`;

const Up = styled.section`
  height: 169.6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Middle = styled.section`
  height: 73px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  justify-content: center;
  align-items: center;
`;

const Inbox = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 30px;
  width: 550px;
  height: 45px;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Example shadow */
  }
`;

const Input = styled.textarea`
  width: 350px;
  height: 40px;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  vertical-align: middle;
  resize: none; /* Prevents resizing */
  border: none;
  line-height: 35px;
  white-space: nowrap; /* Prevents text from wrapping */
  overflow: hidden; /* Hides text overflow */
  &:focus {
    outline: none;
  }
`;

const Blank = styled.section`
  width: 100%;
  height: 306px;
  background-color: white;
`;

const Box1 = styled.div`
  height: 50px;
  padding: 0px 30px;
  border-bottom: 1px solid black;
  background-color: #dadce0;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Box2 = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  background-color: #dadce0;
  align-items: center;
`;

export default App;
