import { MenuItem } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuItem> = {
  component: MenuItem,
  args: {
    children: 'Content',
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'warning', 'danger'],
    },
  },
  decorators: [
    (Story) => {
      return (
        <ul>
          <Story />
        </ul>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomColor: Story = {
  args: {
    color: 'success',
  },
};
