import styled from 'styled-components';

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 2.5rem;
  width: 16rem;
  font-size: 0.8rem;

  border: 1px solid ${props => props.theme.colors.secondary};

  border-radius: 8px;

  svg {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
