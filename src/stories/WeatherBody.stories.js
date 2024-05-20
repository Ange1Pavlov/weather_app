import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { GlobalStateProvider } from '@/components/GlobalStateContext';
import WeatherBody from '@/components/Weather/WeatherBody';
import weatherData from '@/data/weather.json';
import MainCard from '@/components/MainCard';

export default {
  title: 'Components/Weather/Body',
  component: WeatherBody,
  tags: ['autodocs'],
  args: {
    data: weatherData,
    showDesc: false,
    showIcon: false,
    iconSize: 70,
    iconBgColor: 'bg-gray-900',
    headingSize: '3rem',
  },
  decorators: [
    (Story) => (
      <GlobalStateProvider>
        <MainCard>
          <div className='p-5'>
            <Story />
          </div>
        </MainCard>
      </GlobalStateProvider>
    ),
  ],
};

export const WithDescription = {
  args: {
    showDesc: true,
  },
};

export const WithIcon = {
  args: {
    showIcon: true,
    iconBackground: 'bg-gray-600',
    showDesc: true,
    iconSize: 120,
  },
};

export const WithCustomURL = {
  args: {
    ...WithIcon.args,
    customURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Weather_icon_-_full_moon.svg/512px-Weather_icon_-_full_moon.svg.png',
    iconBgColor: 'bg-white/0',
  },
};

export const Mobile = {
  args: WithIcon.args,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
