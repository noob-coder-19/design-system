import { Button, Menu, MenuItem } from '@noobcoder19/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';

const meta: Meta<typeof Menu> = {
  component: Menu,
  args: {
    children: 'Content',
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <ul>
          <Story />
        </ul>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Menu>;

const Template1 = (args: Story['args']) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <div
        style={{
          height: '120vh',
          width: '120vw',
          display: 'flex',
          justifyContent: 'flex-start',
          // justifyContent: 'center',
          // justifyContent: 'flex-end',
          alignItems: 'flex-start',
          // alignItems: 'center',
          // alignItems: 'flex-end',
          border: '1px solid black',
        }}
      >
        <Button ref={ref} onClick={handleClick}>
          Click Me!
        </Button>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
        {...args}
      >
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
      </Menu>
    </>
  );
};

export const TopLeft = Template1.bind({});

const Template2 = (args: Story['args']) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <div
        style={{
          height: '120vh',
          width: '120vw',
          display: 'flex',
          // justifyContent: 'flex-start',
          justifyContent: 'center',
          // justifyContent: 'flex-end',
          // alignItems: 'flex-start',
          alignItems: 'center',
          // alignItems: 'flex-end',
          border: '1px solid black',
        }}
      >
        <Button ref={ref} onClick={handleClick}>
          Click Me!
        </Button>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
        {...args}
      >
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
      </Menu>
    </>
  );
};

export const CenterCenter = Template2.bind({});

const Template3 = (args: Story['args']) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <div
        style={{
          height: '120vh',
          width: '120vw',
          display: 'flex',
          // justifyContent: 'flex-start',
          // justifyContent: 'center',
          justifyContent: 'flex-end',
          // alignItems: 'flex-start',
          // alignItems: 'center',
          alignItems: 'flex-end',
          border: '1px solid black',
        }}
      >
        <Button ref={ref} onClick={handleClick}>
          Click Me!
        </Button>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
        {...args}
      >
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
      </Menu>
    </>
  );
};

export const BottomRight = Template3.bind({});
