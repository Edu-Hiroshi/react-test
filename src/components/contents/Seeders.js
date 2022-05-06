import React from "react";
import styled from "styled-components";

const MarginBottom = styled.div`
  marginBotton: '15px';
`;

const Seeders = ({ seed }) => (
  <MarginBottom>
    {seed ? (
      <div style={{fontSize: '10pt', color: 'green' }}>
        {seed}
      </div>
    ) : (
      <span>
        Sem seeders
      </span>
    )}
  </MarginBottom>
)

export default Seeders