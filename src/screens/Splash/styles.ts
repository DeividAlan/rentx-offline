import styled from 'styled-components/native';

export constÂ Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.header};
`;