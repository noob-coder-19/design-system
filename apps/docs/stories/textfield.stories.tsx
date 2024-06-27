import { TextField } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextField> = {
  component: TextField,
  args: {
    'aria-label': 'TextField',
  },
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'warning', 'danger'],
    },
  },
  decorators: [
    (Story) => (
      <div
        id="decorator-wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          rowGap: '2rem',
          padding: '2rem',
          border: '1px solid #ccc',
          width: '50vw',
        }}
      >
        <Story />
        <caption id="decorator-caption">
          (<i>Note: </i>
          This grey box has been added just to demonstate the fullWidth
          property. <strong>It is not included as part of the styles.</strong>)
        </caption>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'placeholder',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const StartIcon: Story = {
  args: {
    startIcon: (
      <svg
        height="1rem"
        viewBox="0 0 24 24"
        width="1rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
          fill="currentColor"
        />
      </svg>
    ),
  },
};

export const EndIcon: Story = {
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

export const StartAndEndIcon: Story = {
  args: {
    startIcon: (
      <svg
        height="1rem"
        viewBox="0 0 24 24"
        width="1rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
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

export const StartAndEndIconWithLabel: Story = {
  args: {
    label: 'Label',
    startIcon: (
      <svg
        height="1rem"
        viewBox="0 0 24 24"
        width="1rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
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

export const CustomColor: Story = {
  args: {
    label: 'Label',
    color: 'success',
    startIcon: (
      <svg
        height="1rem"
        viewBox="0 0 24 24"
        width="1rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
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
