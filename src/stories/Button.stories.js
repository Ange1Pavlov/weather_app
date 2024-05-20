import Button from '@/components/Button';
import MainCard from '@/components/MainCard';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    type: 'submit',
    label: 'Primary',
    textColor: 'text-white',
    size: 'medium',
    backgroundColor: 'bg-blue-500',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
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

export const Primary = {};

export const DarkGray = {
  args: {
    label: 'Dark Gray',
    backgroundColor: 'bg-slate-500',
  },
};

export const Gray = {
  args: {
    label: 'Gray',
    backgroundColor: 'bg-gray-200',
    textColor: 'text-gray-800',
  },
};

export const Action = {
  args: {
    label: 'Action',
    backgroundColor: 'bg-orange-500',
  },
};
