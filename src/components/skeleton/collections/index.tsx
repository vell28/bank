import React from 'react';

import { SkeletonLine, SkeletonBlock } from '../elements';

export const SingleSkelet: React.FC<{ height?: number }> = ({ height = 10 }) => <SkeletonLine height={height} />;

export const Block2Skelet: React.FC = () => (
  <>
    <SkeletonBlock>
      <SkeletonLine width={70} />
      <SkeletonLine />
      <SkeletonLine width={80} />
    </SkeletonBlock>
    <SkeletonBlock>
      <SkeletonLine width={40} />
      <SkeletonLine width={60} />
      <SkeletonLine width={100} />
    </SkeletonBlock>
  </>
);

export const Block3Skelet: React.FC = () => (
  <>
    <SkeletonBlock>
      <SkeletonLine width={35} />
      <SkeletonLine />
      <SkeletonLine width={56} />
    </SkeletonBlock>
    <SkeletonBlock>
      <SkeletonLine width={20} />
      <SkeletonLine width={70} />
      <SkeletonLine width={40} />
    </SkeletonBlock>
    <SkeletonBlock>
      <SkeletonLine width={40} />
      <SkeletonLine width={65} />
      <SkeletonLine width={85} />
    </SkeletonBlock>
    <SkeletonBlock>
      <SkeletonLine width={15} />
      <SkeletonLine width={32} />
    </SkeletonBlock>
  </>
);

export const BlockLeftSidebarSkelet: React.FC = () => (
  <>
    <SkeletonBlock>
      <SkeletonLine width={16} />
      <SkeletonLine width={63} />
      <SkeletonLine width={30} />
    </SkeletonBlock>
    <SkeletonBlock>
      <SkeletonLine width={30} />
      <SkeletonLine width={74} />
      <SkeletonLine width={90} />
    </SkeletonBlock>
    <SkeletonBlock>
      <SkeletonLine width={22} />
    </SkeletonBlock>
  </>
);

export const BlockUnmaskedCardSkelet: React.FC = () => (
  <SkeletonBlock>
    <SkeletonLine width={70} />
    <SkeletonLine />
    <SkeletonLine width={70} />
    <SkeletonLine />
    <SkeletonLine width={70} />
  </SkeletonBlock>
);

export const BlockCardLimitsSkelet: React.FC = () => (
  <SkeletonBlock>
    <SkeletonLine width={70} />
    <SkeletonLine />
    <SkeletonLine width={70} />
    <SkeletonLine />
    <SkeletonLine width={70} />
  </SkeletonBlock>
);
