import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Moon from "./assets/icon-moon.svg";
import Sun from "./assets/icon-sun.svg";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearch = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <GlobalStyle darkMode={darkMode} />
      <Header>
        <Title darkMode={darkMode}>DevFinder</Title>
        <DarkModeButton onClick={toggleDarkMode}>
          <Icon src={darkMode ? Sun : Moon} alt="Dark Mode" />
        </DarkModeButton>
      </Header>
      <SearchInputContainer>
        <Input
          type="text"
          placeholder="Search GitHub username…"
          className={darkMode ? "dark-mode" : ""}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchInputContainer>
      <Card className={darkMode ? "dark-mode" : ""}>
        {userData && (
          <div>
            <UserInfoContainer>
              <Avatar src={userData.avatar_url} alt="User Avatar" />
              <UserInfo>
                <UserInfoTop>
                  <Name darkMode={darkMode}>{userData.name}</Name>
                  <JoinedInfo>
                    <Label darkMode={darkMode}>Joined:</Label>
                    <Value darkMode={darkMode}>
                      {new Date(userData.created_at).toLocaleDateString()}
                    </Value>
                  </JoinedInfo>
                </UserInfoTop>
              </UserInfo>
            </UserInfoContainer>
            <Bio darkMode={darkMode}>{userData.bio || "No bio available"}</Bio>

            <CenteredInfo darkMode={darkMode}>
              <RepoInfo>
                <Label darkMode={darkMode}>Repos</Label>
                <Value darkMode={darkMode}>{userData.public_repos}</Value>
              </RepoInfo>
              <RepoInfo>
                <Label darkMode={darkMode}>Followers</Label>
                <Value darkMode={darkMode}>{userData.followers}</Value>
              </RepoInfo>
              <RepoInfo>
                <Label darkMode={darkMode}>Following</Label>
                <Value darkMode={darkMode}>{userData.following}</Value>
              </RepoInfo>
            </CenteredInfo>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.darkMode ? "#141D2F" : "#F6F8FF")};
    color: ${(props) => (props.darkMode ? "#ffffff" : "#141D2F")};
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
  color: #333;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333")};
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
    background-color: #1e2a47;
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
  height: auto;
  margin-top: 20px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background: #fff;

  &.dark-mode {
    background-color: #1e2a47;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 15px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const UserInfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333")};
`;

const Bio = styled.p`
  font-size: 16px;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#555")};
`;

const Label = styled.span`
  font-weight: 600;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333")};
`;

const Value = styled.span`
  color: ${(props) => (props.darkMode ? "#ffffff" : "#555")};
`;

const JoinedInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  margin-left: 90px;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: flex-end;
    margin-left: 10px; 
  }
`;

const CenteredInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  height: 85px;
  border-radius: 10px;
  background: ${(props) => (props.darkMode ? "#141D2F" : "#F6F8FF")};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const RepoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px;
`;
