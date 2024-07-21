import styled from "styled-components";

export const Wrapper = styled.section`
  padding-bottom: 1rem;
  form {
    background: var(--white);
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 0 1rem;
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
    height: 5rem;
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
  .submit-btn {
    grid-area: c;
    background: var(--moderate-blue);
    color: var(--white);
    border-radius: 0.5rem;
    padding: 0.75rem 2rem;
    text-transform: uppercase;
    justify-self: end;
    border: none;
  }
  .submit-btn:hover {
    background: var(--light-grayish-blue);
  }
  @media (width>976px) {
    form {
      grid-template-areas: "b a c";
      grid-template-columns: auto 1fr auto;
      align-items: start;
    }
  }
`;
