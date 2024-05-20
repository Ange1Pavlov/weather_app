import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import MainCard from '@/components/MainCard';
import WeatherHeader from '@/components/Weather/WeatherHeader';

export default {
  title: 'Components/Weather/Header',
  component: WeatherHeader,
  tags: ['autodocs'],
  args: {
    name: 'Sofia',
    country: 'BG',
    showTime: false,
  },
  decorators: [
    (Story) => (
      <MainCard>
        <div className='p-5'>
          <Story />
        </div>
      </MainCard>
    ),
  ],
};

export const Default = {
  args: {},
};

export const Clock = {
  args: {
    name: 'Plovdiv',
    country: 'BG',
    showTime: true,
  },
};

export const Mobile = {
  args: Clock.args,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
