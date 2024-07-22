import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  .card {
    background: var(--white);
    padding: 1.5rem;
    max-width: 350px;
    border-radius: 0.5rem;
  }
  h1 {
    color: var(--dark-blue);
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    color: var(--grayish-blue);
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  .modal-btn-container {
    display: flex;
    gap: 1rem;
  }
  .modal-btn {
    padding: 1rem;
    border-radius: 0.5rem;
    color: var(--white);
    text-transform: uppercase;
    border: none;
    width: 100%;
  }
  .modal-btn:nth-child(1) {
    background: var(--grayish-blue);
  }
  .modal-btn:nth-child(2) {
    background: var(--soft-red);
  }
  @media (width>976px) {
    .card {
      max-width: 375px;
    }
  }
`;
