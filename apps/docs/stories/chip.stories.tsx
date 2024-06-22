/* eslint-disable no-console -- Used for demo purposes only inside the file */
/* eslint-disable no-alert -- Used for demo puposes only inside the file */
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
    dragIcon: (
      <svg
        height="1em"
        viewBox="0 0 24 24"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12L4 4m0 0v4m0-4h4m4 8l8-8m0 0v4m0-4h-4m-4 8l-8 8m0 0v-4m0 4h4m4-8l8 8m0 0v-4m0 4h-4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
};

export const Clearable: Story = {
  args: {
    clearable: true,
  },
};

export const CustomClearableIcon: Story = {
  args: {
    clearable: true,
    onClear: (e) => {
      alert(e);
    },
    clearIcon: (
      <svg
        height="1.25em"
        viewBox="0 0 24 24"
        width="1.25em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
          fill="currentColor"
        />
      </svg>
    ),
  },
};

export const CustomColor: Story = {
  args: {
    color: 'success',
  },
};

export const CustomColorWithClearable: Story = {
  args: {
    color: 'success',
    clearable: true,
    onClear: (e) => {
      console.log(e);
      alert(e.currentTarget.classList);
    },
  },
};

export const CustomIconProps: Story = {
  args: {
    color: 'primary',
    clearable: true,
    onClear: (e) => {
      console.log(e);
      alert(e.currentTarget.classList);
    },
    iconProps: {
      'aria-label': 'Remove icon',
    },
  },
};

export const CustomDragIconProps: Story = {
  args: {
    color: 'primary',
    clearable: true,
    onClear: (e) => {
      console.log(e);
      alert(e.currentTarget.classList);
    },
    isDraggable: true,
    iconProps: {
      'aria-label': 'Remove icon',
    },
    dragIconProps: {
      'aria-label': 'Drag icon',
    },
  },
};
