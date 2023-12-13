import { BaseTable, THead, Th, Tr, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>CURRENCY</Th>
        </tr>
      </THead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }, idx) => {
          return (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};
