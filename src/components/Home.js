// import UpperMenu from './UpperMenu';
import Torrents from './ContentList';
import styled from "styled-components";

const CenterDiv = styled.div`
  padding: 20px;
  text-align: center
  
`;

// <UpperMenu/> em cima de centerDiv
const Home = () => {
  return (
    <div>
      <CenterDiv>
        <Torrents/>
      </CenterDiv>

      <CenterDiv>
        Dark Mode: Toggle
      </CenterDiv>
    </div>
  );
};
  
export default Home;
