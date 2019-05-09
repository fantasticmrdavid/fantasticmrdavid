import { css } from 'styled-components';

const widthSizes = {
  small: 568,
  medium: 768,
  large: 1000,
  xlarge: 1600,
};

export const media = Object.keys(widthSizes).reduce((accumulator, label) => {
  const emSize = widthSizes[label] / 16;
  /* eslint-disable */
  accumulator[label] = (...args) => css`
  @media (min-width: ${emSize}em) {
    ${css(...args)}
  }`;
  /* eslint-enable */
  return accumulator;
}, {});
