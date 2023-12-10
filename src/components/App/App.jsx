import { Profile, Container, Heading, Section } from 'components';

import userData from 'data/user.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          User Profile
        </Heading>
        <Profile user={userData} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        {/* <Statistics statsData={statsData} /> */}

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        {/* <ForbesList forbesList={forbesList} /> */}

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        {/* <CryptoHistory transactions={transactions} /> */}
      </Container>
    </Section>
  );
};
