import { Button } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: 'Click me',
  },
};

export const CustomColor: Story = {
  args: {
    children: 'Click me',
    color: 'success',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Click me',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Click me',
    loading: true,
  },
};
