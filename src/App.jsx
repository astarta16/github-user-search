import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Moon from "./assets/icon-moon.svg";
import Sun from "./assets/icon-sun.svg";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.darkMode ? '#141D2F' : '#F6F8FF')};
    color: ${(props) => (props.darkMode ? '#F6F8FF' : '#141D2F')};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 730px;
  flex-shrink: 0;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 26px;
  font-weight: 700;
`;

const Theme = styled.p`
  margin: 0;
`;

const DarkModeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 730px;
  height: 69px;
  flex-shrink: 0;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Input = styled.input`
  padding: 15px 20px;
  border: 1px solid #ffffff;
  border-radius: 15px;
  font-size: 16px;
  width: 100%;
  outline: none;
  
  &.dark-mode {
    background-color: #1E2A47;
    color: #ffffff;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  padding: 15px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
`;

const Card = styled.div`
  width: 730px;
  height: 419px;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  &.dark-mode {
    background-color: #1E2A47;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container>
      <GlobalStyle darkMode={darkMode} />
      <Header>
        <Title>DevFinder</Title>
        <DarkModeButton onClick={toggleDarkMode}>
          <Icon src={darkMode ? Sun : Moon} alt="Dark Mode" />
        </DarkModeButton>
      </Header>
      <SearchInputContainer>
        <Input
          type="text"
          placeholder="Search GitHub username…"
          className={darkMode ? "dark-mode" : ""}
        />
        <SearchButton>Search</SearchButton>
      </SearchInputContainer>
      <Card className={darkMode ? "dark-mode" : ""}></Card>
    </Container>
  );
};

export default App;
