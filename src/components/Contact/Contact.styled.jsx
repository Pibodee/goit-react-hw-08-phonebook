import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  min-width: 170px;
  background: #491180;
  padding: 5px;
  border-radius: 5px;
`;

export const Delete = styled.button`
  width: 150px;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  color: blueviolet;
  border-radius: 5px;

  &:hover {
    color: #1c1c1e;
    background: #feb340;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 26px;
  color: #feb340;
`;
