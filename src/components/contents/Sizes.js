import React from "react";
import styled from "styled-components";

const MarginBottom = styled.div`
  marginBotton: '15px'
`;


const Size = ({ size }) => (
  <MarginBottom>
    {size ? (
      <div style={{fontSize: '10pt', color: 'gray' }}>
        {size}
      </div>
    ) : (
      <span>
        Sem size
      </span>
    )}
  </MarginBottom>
)

export default Size