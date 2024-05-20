import { useGlobalState } from './GlobalStateContext';
import { useState } from 'react';
import Button from './Button';
import Input from './Input';

const LocationFrom = () => {
  const { updateLocation } = useGlobalState();
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location !== '') {
      updateLocation(location);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center justify-center mb-5 w-full'
    >
      <Input
        type='text'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder='Search Location'
      />
      <Button type='submit' label='Apply' backgroundColor='bg-orange-500' />
    </form>
  );
};

export default LocationFrom;
