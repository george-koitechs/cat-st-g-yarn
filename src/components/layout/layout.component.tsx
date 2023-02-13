import React, { PropsWithChildren } from 'react';

import { Cart } from '../cart/cart.component';

import './layout.styles.scss';
import swell from 'swell-js';

swell.init('koi-test', 'pk_YPIa1LSEvM56M8sH9VB3mMomCE92F4Yo'); // TODO replace

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Cart />
      {children}
    </>
  );
};
