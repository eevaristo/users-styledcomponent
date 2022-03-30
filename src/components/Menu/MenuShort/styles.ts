import styled from 'styled-components';

export const MenuContainerShort = styled.div`
  margin: 1rem;
  width: 7rem;
  height: 58rem;
  background: ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const MenuHeaderShort = styled.div`
  width: 1.7rem;
  height: 2rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  h3 {
    font-weight: 700;
    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuItemShort = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  margin-top: 3rem;
  height: 27rem;
`;
