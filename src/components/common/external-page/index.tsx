import React, { useEffect } from 'react';

import { Iframe } from './elements';

interface IExternalPageProps {
  url: string;
  onMessage: (message: string) => void;
}

export const ExternalPage: React.FC<IExternalPageProps> = ({ url, onMessage }) => {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      // TODO check e.origin
      onMessage(e.data);
    };
    window.addEventListener('message', handler);
    return () => {
      window.removeEventListener('message', handler);
    };
  }, [onMessage]);
  return (
    <>
      <Iframe src={url} />
    </>
  );
};
