import React from 'react';
import ContentLoader from 'react-content-loader';

type SkeletonProps = {};

const Skeleton: React.FC<SkeletonProps> = (props) => (
  <ContentLoader
    speed={0}
    width={257}
    height={400}
    viewBox="0 0 257 400"
    backgroundColor="#eaeaea"
    foregroundColor="#f5f5f5"
    {...props}>
    <rect x="0" y="0" rx="12" ry="12" width="257" height="257" />
    <rect x="3" y="267" rx="8" ry="8" width="200" height="25" />
    <rect x="3" y="301" rx="6" ry="6" width="66" height="16" />
    <rect x="3" y="330" rx="7" ry="7" width="257" height="44" />
  </ContentLoader>
);

export default Skeleton;
