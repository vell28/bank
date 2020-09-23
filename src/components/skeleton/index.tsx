import React from 'react';

interface ISkeletonProps {
  children?: React.ReactNode;
  render?: React.ReactNode;
  isLoading?: boolean;
}

export const Skeleton: React.FC<ISkeletonProps> = ({ children, render = null, isLoading = false }) => {
  return <>{isLoading ? render : children}</>;
};
