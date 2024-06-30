import type { AlertProps } from '@noobcoder19/design-system';
import { Alert } from '@noobcoder19/design-system';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

// eslint-disable-next-line react/function-component-definition -- Storybook requires StoryFn return type to be a function
const Template: StoryFn<AlertProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <>
      <button
        onClick={() => {
          setVisible(true);
        }}
        type="button"
      >
        Toggle Alert
      </button>

      {visible ? (
        <Alert
          {...args}
          onClose={() => {
            setVisible(false);

            if (args.onClose) {
              args.onClose();
            }
          }}
        />
      ) : null}
    </>
  );
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = Template.bind({});
Default.args = {
  message: 'Hello world!',
  type: 'success',
  duration: 3000,
};

export const Error: Story = Template.bind({});
Error.args = {
  message: 'Hello world!',
  type: 'error',
  duration: 3000,
};

export const Warning: Story = Template.bind({});
Warning.args = {
  message: 'Hello world!',
  type: 'warning',
  duration: 3000,
};

export const Info: Story = Template.bind({});
Info.args = {
  message: 'Hello world!',
  type: 'info',
  duration: 3000,
};

export const StartIconProps: Story = Template.bind({});
StartIconProps.args = {
  message: 'Hello world!',
  type: 'success',
  duration: 3000,
  startIconProps: {
    style: {
      color: 'red',
      width: '1rem',
      height: '1rem',
      marginRight: '1rem',
    },
  },
};

export const CustomDuration: Story = Template.bind({});
CustomDuration.args = {
  message: 'Hello world!',
  type: 'success',
  duration: 10000,
};

export const CloseOnAction: Story = Template.bind({});
CloseOnAction.args = {
  message: 'Hello world!',
  type: 'success',
  duration: 3000,
  closeOnAction: true,
};

export const Action: Story = Template.bind({});
Action.args = {
  message: 'Hello world!',
  type: 'success',
  duration: 3000,
  alertAction: (
    <button
      onClick={() => {
        // eslint-disable-next-line no-alert -- alert is used for demo purposes
        alert('Undo clicked');
      }}
      style={{
        backgroundColor: 'transparent',
        appearance: 'none',
        border: 'none',
        color: 'white',
      }}
      type="button"
    >
      Undo
    </button>
  ),
};
