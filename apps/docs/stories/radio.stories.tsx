import { Radio } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  component: Radio,
  args: {
    'aria-label': 'radio',
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};

export const Inaccessible: Story = {
  args: {
    'aria-label': undefined,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const CustomColor: Story = {
  args: {
    color: 'danger',
  },
};

export const CustomSize: Story = {
  args: {
    size: '3rem',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const ControlledChecked: Story = {
  args: {
    checked: true,
  },
};

export const ControlledUnchecked: Story = {
  args: {
    checked: false,
  },
};
