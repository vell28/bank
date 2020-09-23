import styled from 'styled-components';

export const NextBtnBox = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const CountryBox = styled.div`
  margin: 0 -17px;
`;

export const LoginForm = styled.form`
  position: relative;
  margin-top: 70px;
  padding-bottom: 50px;
  margin-bottom: auto;
  width: 280px;
`;

export const Line = styled.div`
  position: relative;
  margin-top: 44px;

  button {
    font-weight: 600;
    text-transform: capitalize;
    font-size: 15px;

    &: hover {
      opacity: 0.7;
    }
  }
`;

export const SelectLine = styled(Line)`
  input {
    cursor: pointer !important;
    background: url(/img/arrow-select-white.svg) no-repeat center right 18px;
  }
`;
