import { Chip } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chip> = {
  component: Chip,
  args: {
    children: 'Chip',
  },
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'warning', 'danger'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Draggable: Story = {
  args: {
    isDraggable: true,
  },
};

export const CustomDragHandle: Story = {
  args: {
    isDraggable: true,
    dragIcon: <div>🔥</div>,
  },
};

export const Clearable: Story = {
  args: {
    clearable: true,
  },
};
