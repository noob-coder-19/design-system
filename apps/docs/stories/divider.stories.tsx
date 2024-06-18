import { Divider } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Divider> = {
  component: Divider,
  args: {},
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    thickness: {
      control: { type: 'text' },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '50vw',
          padding: '1rem',
          height: '10vh',
          outline: '1px solid #f6f6f6',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Divider>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
};

export const Dashed: Story = {
  args: {
    variant: 'dashed',
  },
};

export const Dotted: Story = {
  args: {
    variant: 'dotted',
  },
};

export const Thick: Story = {
  args: {
    thickness: '5px',
  },
};

export const CustomColor: Story = {
  args: {
    color: '#00fd56',
  },
};

export const NoGutters: Story = {
  args: {
    disableGutters: true,
  },
};
