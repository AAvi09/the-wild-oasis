import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  color: #333;
  background-color: azure;
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button>Check In</Button>
        <Button>Check Out</Button>
        <Input type="number" placeholder="enter number of guests" />
        <Input type="number" placeholder="enter number of guests" />
      </StyledApp>
    </div>
  );
}

export default App;
