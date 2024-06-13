import { Checkbox } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Inaccessibile: Story = {
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
    size: '3rem',
  },
};

export const DefaultChecked: Story = {
  args: {
    'aria-label': 'checkbox',
    defaultChecked: true,
  },
};

export const DefaultUnchecked: Story = {
  args: {
    'aria-label': 'checkbox',
    defaultChecked: false,
  },
};
