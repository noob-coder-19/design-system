import { Radio } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};
