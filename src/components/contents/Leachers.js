import React from "react";
import styled from "styled-components";

const MarginBottom = styled.div`
  marginBotton: '15px'
`;


const Leachers = ({ leach }) => (
  <MarginBottom>
    {leach ? (
      <div style={{fontSize: '10pt', color: 'red' }}>
        {leach}
      </div>
    ) : (
      <span>
        Sem leachers
      </span>
    )}
  </MarginBottom>
)

export default Leachers