import { Loading } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loading> = {
  component: Loading,
  args: {
    'aria-label': 'Loading',
  },
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'warning', 'danger'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
};

export const Inaccessible: Story = {
  args: {
    'aria-label': undefined,
  },
};

export const CustomColor: Story = {
  args: {
    color: 'success',
  },
};

export const CustomSize: Story = {
  args: {
    size: '1rem',
  },
};
