import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: c;
  justify-self: end;
  button {
    background: var(--moderate-blue);
    color: var(--white);
    border-radius: 0.5rem;
    padding: 0.75rem 2rem;
    text-transform: uppercase;
    border: none;
  }
  button:hover {
    background: var(--light-grayish-blue);
  }
`;
