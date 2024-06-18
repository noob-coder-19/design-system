import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import type PortalProps from './types';

const Portal: React.FC<PortalProps> = ({ children }) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const currentEl = el.current;
    document.body.appendChild(currentEl);
    return () => {
      document.body.removeChild(currentEl);
    };
  }, []);

  return ReactDOM.createPortal(children, el.current);
};

export default Portal;
