import React, { PropsWithChildren } from 'react';
import * as RadixToggle from '@radix-ui/react-toggle';
import './Toggle.styles.scss';
import { ButtonVariant } from '../../button/button.component';
import { ToggleProps } from '@radix-ui/react-toggle';

// interface TogglePropss
//   extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
//     ToggleProps {}

export const Toggle: React.FC<ToggleProps> = ({ children }) => (
  <RadixToggle.Root className='Toggle' aria-label='Toggle italic'>
    {children}
  </RadixToggle.Root>
);
