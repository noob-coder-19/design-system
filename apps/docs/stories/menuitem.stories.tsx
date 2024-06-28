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
    disabled: {
      control: { type: 'boolean' },
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

export const WithStartIcon: Story = {
  args: {
    startIcon: (
      <svg
        height="1em"
        viewBox="0 0 24 24"
        width="1em"
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

export const WithEndIcon: Story = {
  args: {
    endIcon: (
      <svg
        height="1em"
        viewBox="0 0 24 24"
        width="1em"
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

export const WithStartAndEndIcon: Story = {
  args: {
    startIcon: (
      <svg
        height="1em"
        viewBox="0 0 24 24"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
          fill="currentColor"
        />
      </svg>
    ),
    endIcon: (
      <svg
        height="1em"
        viewBox="0 0 24 24"
        width="1em"
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

export const CustomClick: Story = {
  args: {
    onClick: (event) => {
      // eslint-disable-next-line no-alert -- This is a demo
      alert(
        `Click event: ${event.currentTarget.clientWidth} x ${event.currentTarget.clientHeight}`,
      );
    },
  },
};
