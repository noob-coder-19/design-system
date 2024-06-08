import { Switch } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    'aria-label': 'Switch',
    id: 'switch',
  },
};

export const Checked: Story = {
  args: {
    'aria-label': 'Switch',
    id: 'switch',
    defaultChecked: true,
  },
};

export const Unchecked: Story = {
  args: {
    'aria-label': 'Switch',
    id: 'switch',
    defaultChecked: false,
  },
};

export const ControlledChecked: Story = {
  args: {
    'aria-label': 'Switch',
    id: 'switch',
    checked: true,
  },
};

export const ControlledUnchecked: Story = {
  args: {
    'aria-label': 'Switch',
    id: 'switch',
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    'aria-label': 'Switch',
    id: 'switch',
    defaultChecked: true,
    disabled: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    'aria-label': 'Switch',
    id: 'switch',
    defaultChecked: false,
    disabled: true,
  },
};

export const CustomColor: Story = {
  args: {
    'aria-label': 'Switch',
    id: 'switch',
    color: 'success',
  },
};
