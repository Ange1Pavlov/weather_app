import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { GlobalStateProvider } from '@/components/GlobalStateContext';
import Header from '@/components/Header';
import LocationFrom from '@/components/LocationFrom';
import MainCard from '@/components/MainCard';
import NavLink from '@/components/NavLink';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story, { args }) => {
      if (args.children) {
        return (
          <GlobalStateProvider>
            <MainCard>
              <div className='p-5'>
                <Story />
              </div>
            </MainCard>
          </GlobalStateProvider>
        );
      }
      return <Story />;
    },
  ],
  args: {
    pageLabel: 'Home',
    backgroundColor: 'bg-gray-700',
  },
};

export const Home = {
  args: {
    children: <LocationFrom />,
  },
};

export const Simple = {
  args: {
    children: (
      <div className='space-x-4'>
        <NavLink href='/about' label='About' />
        <NavLink href='/contact' label='Contact Us' />
      </div>
    ),
  },
};

export const Mobile = {
  args: Home.args,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
