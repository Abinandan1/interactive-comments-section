import styled from "styled-components";

export const Wrapper = styled.section`
  .comments {
    display: grid;
    gap: 1rem;
    padding: 1rem;
  }
  .replies-container {
    display: grid;
    grid-template-columns: auto 1fr;
  }
  hr {
    margin-right: 1rem;
    width: 2px;
    border: none;
    background: var(--light-gray);
  }
  .replies {
    display: grid;
    gap: 1rem;
  }
  @media (width>976px) {
    width: 50%;
    margin: 0 auto;
    hr {
      margin: 0 2rem;
    }
  }
`;
