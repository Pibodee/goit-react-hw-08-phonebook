import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 700px;
  align-items: center;
  gap: 15px;
  border: 1px solid grey;
  background: linear-gradient(
    90deg,
    rgba(13, 13, 119, 0.7847514005602241) 7%,
    rgba(128, 17, 123, 0.6306897759103641) 90%,
    rgba(218, 0, 255, 0.6138830532212884) 100%,
    rgba(113, 101, 48, 1) 100%
  );
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 24px;
  color: #feb340;
`;

export const StyledField = styled(Field)`
  display: block;
  width: 400px;
  height: 40px;
  border-radius: 5px;
`;

export const FormBtn = styled.button`
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
