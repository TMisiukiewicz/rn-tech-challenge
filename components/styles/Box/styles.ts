import styled, { css } from 'styled-components/native';
import { StyledBoxProps } from './types';

export const StyledBox = styled.View<StyledBoxProps>`
  flex: 1;
  ${({ centerVertical }) =>
    centerVertical
      ? css`
          justify-content: center;
        `
      : undefined}
  ${({ centerHorizontal }) =>
    centerHorizontal
      ? css`
          align-items: center;
        `
      : undefined}
  ${({ pt, pb, pl, pr, mt, mb, ml, mr }) => `
    padding-top: ${pt || 0}px;
    padding-bottom: ${pb || 0}px;
    padding-left: ${pl || 0}px;
    padding-right: ${pr || 0}px;
    margin-top: ${mt || 0}px;
    margin-bottom: ${mb || 0}px;
    margin-left: ${ml || 0}px;
    margin-right: ${mr || 0}px;
  `})}
  width: ${({ width, widthRatio }) => {
    if (width) return `${width}px`;

    if (widthRatio) return `${widthRatio * 100}%`;

    return 'auto';
  }}
`;
