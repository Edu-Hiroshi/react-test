import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const MarginBottom = styled.div`
  marginBotton: '15px'
`;


const Titles = ({ title }) => (
  <MarginBottom>
    {title ? (
      <div style={{fontSize: '12pt', color: 'darkblue' }}>
        
        <Link to="/item">
          [Grupo] {title}
        </Link>

      </div>
    ) : (
      <span>
        Sem titulo
      </span>
    )}
  </MarginBottom>
)

export default Titles