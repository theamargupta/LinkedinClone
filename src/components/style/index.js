import styled, { css } from 'styled-components';
export const CustomInput = styled.input`
  ${({ primary }) =>
    primary === 'err'
      ? css`
          border: 3px solid red;
          color: red;
        `
      : primary === 'valid'
      ? css`
          border: 2px solid green;
          color: green;
        `
      : null}
`;
export const Container = styled.div`
  display: flex;
`;
