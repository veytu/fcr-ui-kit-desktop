import { PathOptions } from '../svg-dict';

export const path = ({ iconPrimary }: PathOptions) => (
  <g>
    <circle cx="14.5" cy="14.4998" r="2.5" fill={iconPrimary} />
    <circle
      cx="15"
      cy="15"
      r="13"
      transform="rotate(90 15 15)"
      stroke={iconPrimary}
      stroke-width="2"
    />
  </g>
);
export const viewBox = '0 0 30 30';
