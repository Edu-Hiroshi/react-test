import React from "react";
import styled from "styled-components";

const MarginBottom = styled.div`
  marginBotton: '15px'
`;


const Link = ({ link }) => (
  <MarginBottom>
    {link ? (
      <div style={{fontSize: '8pt', color: 'blue' }}>
        {link}
      </div>
    ) : (
      <span>
        Sem categoria
      </span>
    )}
  </MarginBottom>
)

export default Link