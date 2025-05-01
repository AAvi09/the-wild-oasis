import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  color: #333;
  background-color: azure;
`;
const Button = styled.button`
  background-color: purple;
  font-size: 1.4rem;
  padding: 1rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  color: whitesmoke;
`;
function App() {
  return (
    <div>
      <H1>Ram Ram saraya ne</H1>
      <Button>Check In</Button>
    </div>
  );
}

export default App;
