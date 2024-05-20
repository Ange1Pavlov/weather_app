import MainCard from '@/components/MainCard';
import WeatherHeader from '@/components/Weather/WeatherHeader';

export default {
  title: 'Components/Weather/Header',
  component: WeatherHeader,
  tags: ['autodocs'],
  args: {
    name: 'Sofia',
    country: 'BG',
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

export const Main = {
  args: {},
};
