import styled from "styled-components";

export const containerCard = styled.section`
  display: flex;
  width: 25rem;
  flex-direction: column;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .Entregue {
    background: #737374;
    opacity: 0.6;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .EmRota {
    background: #addcda;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
export const headerCard = styled.div`
  display: flex;
  justify-content: space-between;
`;
