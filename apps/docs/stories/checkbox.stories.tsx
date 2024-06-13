import { Checkbox } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    'aria-label': 'Checkbox',
    onChange: (event) => {
      // Handle the click event appropriately
      // eslint-disable-next-line no-alert -- This is just an example of how you might handle the event
      alert(
        `Checked: ${event.target.checked} event.timestamp: ${event.timeStamp} event.type: ${event.type}`,
      );
    },
  },
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'warning', 'danger'],
    },
    checked: {
      control: { type: 'boolean' },
    },
    defaultChecked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
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
    defaultChecked: true,
  },
};

export const DefaultUnchecked: Story = {
  args: {
    defaultChecked: false,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    defaultChecked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const ControlledUnchecked: Story = {
  args: {
    checked: false,
  },
};

export const ControlledChecked: Story = {
  args: {
    checked: true,
  },
};
