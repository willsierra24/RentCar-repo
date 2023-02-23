import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/actions/actions";

function Search() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");

  function handleLocation(e) {
    e.preventDefault();
    setLocation(e.target.value);
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setSearch(location));
    setLocation("");
  }

  return (
    <React.Fragment>
      <ContainerStyled>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputStyled
            type="search"
            value={location}
            placeholder="Where do you need your car?"
            onChange={(e) => handleLocation(e)}
          />

          <ButtonStyled type="submit">SEARCH</ButtonStyled>
        </form>
      </ContainerStyled>
    </React.Fragment>
  );
}

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const InputStyled = styled.input`
  background-color: white;
  width: 300px;
  border: 2px solid #fb8500;
  border-radius: 8px;
  margin-right: 3px;
  padding: 8px;
  outline: none;
  color: black;
`;

export const ButtonStyled = styled.button`
  background-color: #ffb703;
  border-radius: 7px;
  padding: 10px;
  border: none;
  color: #023047;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #219ebc;
    color: #fff;
  }
`;
export default Search;