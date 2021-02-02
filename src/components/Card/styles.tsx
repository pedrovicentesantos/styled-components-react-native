import styled, { css } from 'styled-components/native';
import { ICardStyledProps } from './interface';

const Container = styled.View`
  height: 72px;
  padding: 14px;
  margin: 24px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['neutral-200']}
`;

const fontVariante = css`
  font-family: ${({ theme }) => theme.fonts.label};
  font-size: 24px;
  color: ${({ theme }) => theme.colors['neutral-700']}
`;

const Label = styled.Text`
  ${fontVariante}
`;

const Description = styled.Text<ICardStyledProps>`
  ${fontVariante};
  color: ${({ theme, color }) => theme.colors[color]};
  ${({ strikeThrough, color, theme }) => strikeThrough
  && css`
      text-decoration: line-through;
      text-decoration-color: ${theme.colors[color]}
    `}
`;

export {
  Container,
  Label,
  Description,
};
