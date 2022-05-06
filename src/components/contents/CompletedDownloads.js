import React from "react";
import styled from "styled-components";

const MarginBottom = styled.div`
  marginBotton: '15px'
`;


const Completed = ({ cd }) => (
  <MarginBottom>
    {cd ? (
      <div style={{fontSize: '10pt', color: 'black' }}>
        {cd}
      </div>
    ) : (
      <span>
        Sem downloads completados
      </span>
    )}
  </MarginBottom>
)

export default Completed