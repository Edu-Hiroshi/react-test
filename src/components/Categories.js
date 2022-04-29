import React from "react";
import styled from "styled-components";

const MarginBottom = styled.div`
  marginBotton: '15px'
`;


const Categories = ({ category }) => (
  <MarginBottom>
    {category ? (
      <div style={{fontSize: '10pt', color: 'gray' }}>
        {category}
      </div>
    ) : (
      <span>
        Sem categoria
      </span>
    )}
  </MarginBottom>
)

export default Categories