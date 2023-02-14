import React, { PropsWithChildren } from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import './Select.styles.scss';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import { SelectProps as RadixSelectProps } from '@radix-ui/react-select';

type SelectSize = 'small' | 'medium' | 'large';
interface SelectOption extends Record<string, any> {
  value: string;
  label: string;
}
interface SelectProps extends RadixSelectProps {
  options: SelectOption[];
  placeholder: string;
  size?: SelectSize;
}

const RadixSelectItem = React.forwardRef<any, any>(
  ({ children, className, size = 'small', ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={classNames('SelectItem', className, {
          SelectItem_small: size === 'small',
          SelectItem_medium: size === 'medium',
          SelectItem_large: size === 'large',
        })}
        {...props}
        ref={forwardedRef}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className='SelectItemIndicator'>
          <CheckIcon />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    );
  }
);

export const Select: React.FC<SelectProps> = ({ options, placeholder, size = 'small' }) => (
  <RadixSelect.Root>
    <RadixSelect.Trigger
      className={classNames('SelectTrigger', {
        SelectTrigger_small: size === 'small',
        SelectTrigger_medium: size === 'medium',
        SelectTrigger_large: size === 'large',
      })}
      aria-label='Food'
    >
      <RadixSelect.Value placeholder={placeholder} />
      <RadixSelect.Icon className='SelectIcon'>
        <img src='/images/arrow-down.svg' alt='' className='select_arrow'></img>
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
    <RadixSelect.Portal>
      <RadixSelect.Content className='SelectContent'>
        <RadixSelect.ScrollUpButton className='SelectScrollButton'>
          <ChevronUpIcon />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className='SelectViewport'>
          {options.map((option) => {
            return (
              <RadixSelectItem key={option.value} value={option.value} size={size}>
                {option.label}
              </RadixSelectItem>
            );
          })}
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className='SelectScrollButton'>
          <ChevronDownIcon />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
);
