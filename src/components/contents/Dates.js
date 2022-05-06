import React from "react";
import styled from "styled-components";

const MarginBottom = styled.div`
  text-align: center;
`;


const Dates = ({ date }) => (
  <MarginBottom>
    {date ? (
      <div style={{fontSize: '10pt', color: 'gray' }}>
        {date}
      </div>
    ) : (
      <span>
        Sem datas
      </span>
    )}
  </MarginBottom>
)

export default Dates