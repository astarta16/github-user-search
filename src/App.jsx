import React from 'react';
import styled from 'styled-components';
import IconSearch from './assets/icon-search.svg';

const SearchContainer = styled.div`
  display: flex;
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

const App = () => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchInput>
          <Input type="text" placeholder="Search GitHub username…" />
        </SearchInput>
        <SearchButton>Search</SearchButton>
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default App;
