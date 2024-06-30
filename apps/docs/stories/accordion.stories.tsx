import { Accordion } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  args: {
    headerContent: 'Title of the accordion',
    children: 'Content of the accordion',
  },
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'warning', 'danger'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Diabled: Story = {
  args: {
    disabled: true,
  },
};

export const ControlledExpanded: Story = {
  args: {
    expanded: true,
  },
};

export const ControlledShrinked: Story = {
  args: {
    expanded: false,
  },
};

export const DefaultExpanded: Story = {
  args: {
    defaultExpanded: true,
  },
};

export const WithCustomHeader: Story = {
  args: {
    headerContent: (
      <div>
        <h1>Custom header</h1>
      </div>
    ),
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div>
        <h1>Custom content</h1>
      </div>
    ),
  },
};

export const WithOnChange: Story = {
  args: {
    expanded: false,
    onChange: (event: React.MouseEvent<HTMLDivElement>, expanded: boolean) => {
      // eslint-disable-next-line no-alert -- alert is used for demo purposes
      alert(`Expanded: ${expanded}`);
    },
  },
};
