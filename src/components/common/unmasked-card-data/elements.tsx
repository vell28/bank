import styled from 'styled-components';

export const CardPreviewBox = styled.div`
  margin-bottom: 13px;
  padding-top: 26px;
  padding-bottom: 0;
  border-radius: 7px;
  border: 1px solid ${(props) => props.theme.colors.borderLight};
`;

export const PreviewTitle = styled.h2`
  margin-bottom: 23px;
  color: ${(props) => props.theme.colors.black};
  font-size: 17px;
  font-weight: 500;
  line-height: 1.18;
  letter-spacing: -0.3px;
`;

export const PreviewLine = styled.div`
  padding: 10px 11px 11px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray6};
  &:last-child {
    border-bottom: none;
  }
`;

export const CardFieldLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.dark};
  font-size: 15px;
  letter-spacing: -0.4px;
  cursor: pointer;
`;

export const CardLabelName = styled.span`
  color: ${(props) => props.theme.colors.dark};
  font-size: 15px;
  letter-spacing: -0.4px;
`;

export const CardLabelValue = styled<any>('span')`
  margin-left: auto;
  color: ${(props) => (props.isShown ? props.theme.colors.dark : props.theme.colors.gray3)};
`;

export const SwitchBox = styled.div`
  width: 40px;
  position: relative;
  margin: 2px auto;
`;
