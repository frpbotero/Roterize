import styled from "styled-components";

export const containerCard = styled.section`
  display: flex;
  width: 25rem;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    width: 15rem;
  }

  .EmRota {
    background: #737374;
    opacity: 0.6;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .Entregue {
    background: #addcda;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
export const headerCard = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .package {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;
