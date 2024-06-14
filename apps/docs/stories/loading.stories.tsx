import { Loading } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loading> = {
  component: Loading,
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
};
