import React from 'react';
import styled from 'styled-components';
import IconSearch from './assets/icon-search.svg';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column; /* To stack the input and the card vertically */
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
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

const SearchInput = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  padding: 15px 20px;
  border: 1px solid #ffffff;
  border-radius: 15px;
  font-size: 16px;
  width: 100%;
  background: #ffffff;
  outline: none;
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
  background: #0079FF;
`;

const Card = styled.div`
  width: 730px;
  height: 419px;
  background: #fff; 
  margin-top: 20px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const App = () => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchInput>
          <Input type="text" placeholder="Search GitHub username…" />
        </SearchInput>
        <SearchButton>Search</SearchButton>
      </SearchInputContainer>
      <Card>
        {/* Card content goes here */}
      </Card>
    </SearchContainer>
  );
};

export default App;
