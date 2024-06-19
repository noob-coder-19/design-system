import { Portal } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Portal> = {
  component: Portal,
};

export default meta;

type Story = StoryObj<typeof Portal>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: (
      <>
        <h1>Hello world!</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          fugiat unde perferendis incidunt eius, asperiores aspernatur dolorum
          repudiandae nisi nostrum impedit quia quidem qui perspiciatis aut ab
          assumenda minus quasi.
        </p>
      </>
    ),
  },
};
