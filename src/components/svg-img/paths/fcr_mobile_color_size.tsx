import React from 'react';

import { PathOptions } from '../svg-dict';

export const path = ({ iconPrimary }: PathOptions) => (
  <g>
    <circle
      cx="16"
      cy="15.9997"
      r="9"
      transform="rotate(90 16 15.9997)"
      stroke={iconPrimary}
      stroke-width="2"
    />
    <circle cx="16" cy="15.9997" r="6" transform="rotate(90 16 15.9997)" fill={iconPrimary} />
  </g>
);
export const viewBox = '0 0 32 32';
