import styled from '@emotion/styled';

export const Card = styled.div`
  padding: ${props => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;

  width: 80%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};
`;

export const StatisticTitle = styled.h3`
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};

  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${props => props.theme.spacing(2)};
`;
