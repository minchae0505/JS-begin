import React from "react"; // Import React
import styled from "styled-components";
import Logo from "./img/netgo.png";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Div>
        {/* <Back></Back> */}
        <Header>
          <Pic src={Logo} />
          <Tri>
            <Sel>
              <option>한국어</option>
              <option>English</option>
            </Sel>
            <Tbtn>로그인</Tbtn>
          </Tri>
        </Header>
      </Div>
    </React.Fragment>
  );
}

export default App;

const Back = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background-color: rgb(0, 0, 0, 0);
`;

const Div = styled.div`
  background-image: url(https://cdn.the-pr.co.kr/news/photo/201808/40879_60976_3825.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
`;

const Pic = styled.img`
  width: 200px; /* Set width as a CSS property */
`;

const Tri = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

const Tbtn = styled.button`
  width: 74px;
  height: 32px;
  border-radius: 5px;
  background-color: red;
  color: white;
  border: none;
`;

const Sel = styled.select`
  width: 124.4px;
  height: 32px;
  padding: 6px 28px 6px;
  border-radius: 5px;
  border: 1px solid black;
`;
