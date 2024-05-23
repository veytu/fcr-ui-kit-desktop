import { PathOptions } from '../svg-dict';

export const path = ({ iconPrimary }: PathOptions) => (
  <g>
    <circle cx="15" cy="15.0001" r="5" fill={iconPrimary} />
  </g>
);
export const viewBox = '0 0 30 30';
