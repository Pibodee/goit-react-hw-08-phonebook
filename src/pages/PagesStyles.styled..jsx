import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px 0;
  background: linear-gradient(156.46deg, #5d7efc -0.65%, #9f4bfb 65.17%);
  width: 100vw;
  min-height: 90vh;
  height: 100%;
  gap: 40px;
`;

export const Hero = styled.h2`
  display: block;
  text-transform: uppercase;
  color: #1c1c1e;
  text-align: center;
  margin: 0;
`;

export const Invitation = styled.h3`
  color: #feb340;
  text-align: center;
  margin: 0;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
`;
