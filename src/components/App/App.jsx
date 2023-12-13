import {
  Profile,
  Container,
  Heading,
  Section,
  Statistics,
  FriendsList,
  TransactionHistory,
} from 'components';

import userData from 'data/user.json';
import statsData from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          User Profile
        </Heading>
        <Profile user={userData} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Statistics
        </Heading>
        <Statistics statsData={statsData} title={'Upload stats'} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <FriendsList friendsList={friends} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <TransactionHistory transactions={transactions} />
      </Container>
    </Section>
  );
};
