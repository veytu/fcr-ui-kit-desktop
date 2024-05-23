import React from 'react';

import { PathOptions } from '../svg-dict';

export const path = ({ iconPrimary }: PathOptions) => (
  <g>
    <path
      d="M10.7071 3.29289C10.3166 2.90237 9.68342 2.90237 9.29289 3.29289C8.90237 3.68342 8.90237 4.31658 9.29289 4.70711L11.5858 7H2C1.44772 7 1 7.44772 1 8C1 8.55228 1.44772 9 2 9H11.5858L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071C9.68342 13.0976 10.3166 13.0976 10.7071 12.7071L15.4142 8L10.7071 3.29289Z"
      fill={iconPrimary}
    />
  </g>
);
export const viewBox = '0 0 16 16';
