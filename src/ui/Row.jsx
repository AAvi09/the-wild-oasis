import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 1.2rem 0;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      display: grid;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;
Row.defaultProps = {
  type: "vertical",
};

export default Row;
