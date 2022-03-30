import styled from 'styled-components';

export const MenuContainer = styled.div`
  margin: 1rem;
  width: 18rem;
  height: 58rem;
  background: ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const MenuHeader = styled.div`
  width: 17rem;
  height: 10rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }
  h3 {
    font-weight: 700;
    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  margin-top: 3rem;
  height: 27rem;
`;

export const MenuToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 1.5rem;
  border-style: none;
  width: 1.5rem;
  background: ${props => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
  }
`;
