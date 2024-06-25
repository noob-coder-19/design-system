import { Paper } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Paper> = {
  component: Paper,
  args: {
    children: 'This is a paper',
    style: { width: '200px', height: '200px', padding: '16px' },
  },
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'warning', 'danger'],
    },
    elevation: {
      control: { type: 'radio' },
      options: [
        'level-0',
        'level-1',
        'level-2',
        'level-3',
        'level-4',
        'level-5',
        'level-6',
        'level-7',
        'level-8',
        'level-9',
        'level-10',
        'level-11',
        'level-12',
        'level-13',
        'level-14',
        'level-15',
        'level-16',
        'level-17',
        'level-18',
        'level-19',
        'level-20',
        'level-21',
        'level-22',
        'level-23',
        'level-24',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paper>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Level0: Story = {
  args: {
    elevation: 'level-0',
  },
};

export const Level1: Story = {
  args: {
    elevation: 'level-1',
  },
};

export const Level2: Story = {
  args: {
    elevation: 'level-2',
  },
};

export const Level3: Story = {
  args: {
    elevation: 'level-3',
  },
};

export const Level4: Story = {
  args: {
    elevation: 'level-4',
  },
};

export const Level5: Story = {
  args: {
    elevation: 'level-5',
  },
};

export const Level6: Story = {
  args: {
    elevation: 'level-6',
  },
};

export const Level7: Story = {
  args: {
    elevation: 'level-7',
  },
};

export const Level8: Story = {
  args: {
    elevation: 'level-8',
  },
};

export const Level9: Story = {
  args: {
    elevation: 'level-9',
  },
};

export const Level10: Story = {
  args: {
    elevation: 'level-10',
  },
};

export const Level11: Story = {
  args: {
    elevation: 'level-11',
  },
};

export const Level12: Story = {
  args: {
    elevation: 'level-12',
  },
};

export const Level13: Story = {
  args: {
    elevation: 'level-13',
  },
};

export const Level14: Story = {
  args: {
    elevation: 'level-14',
  },
};

export const Level15: Story = {
  args: {
    elevation: 'level-15',
  },
};

export const Level16: Story = {
  args: {
    elevation: 'level-16',
  },
};

export const Level17: Story = {
  args: {
    elevation: 'level-17',
  },
};

export const Level18: Story = {
  args: {
    elevation: 'level-18',
  },
};

export const Level19: Story = {
  args: {
    elevation: 'level-19',
  },
};

export const Level20: Story = {
  args: {
    elevation: 'level-20',
  },
};

export const Level21: Story = {
  args: {
    elevation: 'level-21',
  },
};

export const Level22: Story = {
  args: {
    elevation: 'level-22',
  },
};

export const Level23: Story = {
  args: {
    elevation: 'level-23',
  },
};

export const Level24: Story = {
  args: {
    elevation: 'level-24',
  },
};
