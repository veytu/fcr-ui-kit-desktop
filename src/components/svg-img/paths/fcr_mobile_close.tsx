import React from 'react';

import { PathOptions } from '../svg-dict';

export const path = ({ iconPrimary }: PathOptions) => (
  <g>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.8326 4.16749C12.0558 4.39065 12.0558 4.75245 11.8326 4.97561L4.97549 11.8328C4.75233 12.0559 4.39052 12.0559 4.16737 11.8328C3.94421 11.6096 3.94421 11.2478 4.16737 11.0246L11.0245 4.16749C11.2477 3.94433 11.6095 3.94433 11.8326 4.16749Z"
      fill={iconPrimary}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.16737 4.16749C4.39052 3.94433 4.75233 3.94433 4.97549 4.16749L11.8326 11.0246C12.0558 11.2478 12.0558 11.6096 11.8326 11.8328C11.6095 12.0559 11.2477 12.0559 11.0245 11.8328L4.16737 4.97561C3.94421 4.75245 3.94421 4.39065 4.16737 4.16749Z"
      fill={iconPrimary}
    />
  </g>
);
export const viewBox = '0 0 16 16';
