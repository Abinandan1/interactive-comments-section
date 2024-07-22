import styled from "styled-components";

export const Wrapper = styled.section`
  background: var(--white);
  border-radius: 0.5rem;
  padding: 1rem;
  header {
    margin-bottom: 1rem;
  }
  .info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .user-img {
    width: 2rem;
    height: 2rem;
  }
  .user-name {
    color: var(--dark-blue);
    font-weight: 700;
  }
  .created-at {
    color: var(--grayish-blue);
  }
  .content {
    color: var(--grayish-blue);
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  .content span {
    font-weight: 700;
    color: var(--moderate-blue);
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .score-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0.75rem;
    background: var(--very-light-gray);
    border-radius: 0.5rem;
  }
  .score-btn {
    background: transparent;
    border: none;
    display: grid;
  }
  .score-btn:hover {
    filter: contrast(20%);
  }
  .score {
    color: var(--moderate-blue);
    font-weight: 500;
  }
  .reply-btn {
    background: transparent;
    border: none;
    color: var(--moderate-blue);
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 1rem;
  }
  .reply-btn:hover,
  .edit-btn:hover {
    color: var(--light-grayish-blue);
  }
  .reply-btn:hover img,
  .edit-btn:hover img {
    filter: brightness(200%);
  }
  .delete-btn:hover {
    color: var(--pale-red);
  }
  .delete-btn:hover img {
    filter: brightness(200%);
  }
  .you {
    background: var(--moderate-blue);
    color: var(--white);
    padding: 0 0.25rem;
  }
  .you-btns-container {
    display: flex;
    gap: 1rem;
  }
  .you-btns-container button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    gap: 0.5rem;
    font-weight: 500;
  }
  .edit-btn {
    color: var(--moderate-blue);
  }
  .delete-btn {
    color: var(--soft-red);
  }
  .hide-mobile {
    display: none;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }
  textarea {
    width: 100%;
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
  @media (width > 976px) {
    display: grid;
    grid-template-areas:
      "a b"
      "a c";
    grid-template-columns: auto 1fr;
    gap: 0 1rem;
    padding: 1rem 2rem;
    .hide-mobile {
      display: flex;
    }
    .score-container {
      flex-direction: column;
      justify-content: space-around;
      grid-area: a;
      align-self: start;
      min-height: 75%;
      width: 2.5rem;
    }
    .hide-desktop {
      display: none;
    }
    header {
      grid-area: b;
      display: flex;
      justify-content: space-between;
    }
    .content {
      grid-area: c;
      max-width: 600px;
    }
  }
`;
