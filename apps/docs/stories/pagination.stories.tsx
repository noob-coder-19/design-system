import { Pagination } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  args: {
    page: 1,
    totalPages: 10,
  },
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'warning', 'danger'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const FirstPage: Story = {
  args: {},
};

export const LastPage: Story = {
  args: {
    page: 10,
  },
};

export const CustomColor: Story = {
  args: {
    color: 'success',
  },
};

export const CustomOnChange: Story = {
  args: {
    page: 5,
    onChange: (event, page) => {
      // eslint-disable-next-line no-alert -- alert is used in story
      alert(`You're going to page ${page}`);
    },
  },
};

export const CustomIconContainer: Story = {
  args: {
    page: 5,
    onChange: (event, page) => {
      // eslint-disable-next-line no-alert -- alert is used in story
      alert(`You're going to page ${page}`);
    },
    iconContainerProps: {
      style: {
        height: '2rem',
        width: '2rem',
        color: 'darkgreen',
      },
    },
  },
};
