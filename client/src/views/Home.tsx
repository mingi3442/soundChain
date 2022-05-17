import styled from "styled-components";
import IndexFirst from "../components/IndexFirst";

const Containrer = styled.div`
  margin-top: 80px;
  height: 10000px;
`;

function Home() {
  return (
    <Containrer>
      <IndexFirst />
    </Containrer>
  );
}

export default Home;
