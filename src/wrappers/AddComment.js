import styled from "styled-components";

export const Wrapper = styled.section`
  form {
    background: var(--white);
    border-radius: 0.5rem;
    padding: 1rem;
    /* margin: 0 1rem;   */
    display: grid;
    grid-template-areas:
      "a a"
      "b c";
    gap: 1rem;
    align-items: center;
  }
  textarea {
    border-radius: 0.5rem;
    border: 2px solid var(--light-gray);
    min-height: 5rem;
    padding: 0.5rem 1rem;
    grid-area: a;
    resize: none;
  }
  textarea:hover {
    border-color: var(--moderate-blue);
  }
  img {
    grid-area: b;
    width: 2rem;
    height: 2rem;
  }
  @media (width>976px) {
    form {
      grid-template-areas: "b a c";
      grid-template-columns: auto 1fr auto;
      align-items: start;
    }
  }
`;
