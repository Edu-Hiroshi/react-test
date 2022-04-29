import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  background-color: rgb(34, 34, 34);
`;

const DivComEspaco = styled.div`
  padding: 14px;
`;

const DivBranco = styled.div`
  padding: 14px;
  color: gray
`;

const Button = styled.button`
  background-color: #337AB7;
  border: none;
  color: white;
`;

const DivLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const DivRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;


const upperMenu = () => (
  <DivFlex>
    <DivLeft>
      <DivBranco>
        <Link to="/">
          Nyaa
        </Link>
      </DivBranco>
      <DivBranco>Upload</DivBranco>
      <DivBranco>Info</DivBranco>
      <DivBranco>RSS</DivBranco>
      <DivBranco>Twitter</DivBranco>
    </DivLeft>
    
    <DivRight>
      <DivComEspaco>
        <select name="No filter" id="filtro">
          <option value="No filter">No filter</option>
          <option value="No Remakes">No Remakes</option>
          <option value="Trusted only">Trusted only</option>
        </select>
      </DivComEspaco>

      <DivComEspaco>
        <select name="All categories" id="categories">
          <option value="Anime">Anime</option>
          <option value="Audio">Audio</option>
          <option value="Pictures">Pictures</option>
          <option value="Literature">Literature</option>
          <option value="Software">Software</option>
        </select>
      </DivComEspaco>

      <DivComEspaco>
        <input/>
        <Button>Q</Button>
      </DivComEspaco>

      <DivBranco>Guest</DivBranco>
    </DivRight>

  </DivFlex>
);

export default upperMenu;