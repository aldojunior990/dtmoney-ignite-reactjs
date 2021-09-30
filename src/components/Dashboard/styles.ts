import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;
export const Button = styled.button`
  font-size: 1rem;
  color: var(--text-title);
  background: var(--shape);
  border: 0;
  padding: 0 2rem;
  border-radius: 0%.25rem;
  height: 2.5rem;
  transition: filter 0.2s;
  margin: 4rem auto 1rem;
  box-shadow: 0.05px 0.05px 1px #00000078;
  &:hover {
    filter: brightness(0.9);
  }
`;
