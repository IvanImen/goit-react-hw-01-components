import styled from '@emotion/styled';

export const FriendsBoard = styled.div`
  width: ${props => props.theme.spacing(120)};
  border-radius: ${props => props.theme.spacing(3)};

  margin: 0 auto;
  overflow: hidden;
`;

export const FriendsBoardProfiles = styled.ul`
  background-color: ${props => props.theme.colors.white};
  border-radius: 0 0 ${props => props.theme.spacing(3)};

  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};

  display: grid;
  row-gap: ${props => props.theme.spacing(2)};
`;
