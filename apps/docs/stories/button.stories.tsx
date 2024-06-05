import { Button } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Click me',
    onClick: (event) => {
      // Handle the click event appropriately
      // eslint-disable-next-line no-alert -- This is just an example of how you might handle the event
      alert(`event.clientX: ${event.clientX} event.clientY: ${event.clientY}`);
    },
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'warning', 'danger'],
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
  args: {},
};

export const CustomColor: Story = {
  args: {
    color: 'success',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
