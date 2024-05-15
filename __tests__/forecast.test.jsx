import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useGlobalState } from '../src/components/GlobalStateContext';
import Page from '../src/app/forecast/[id]/page';
import mockForecastData from '../src/data/forecast.json';

// Mock the useGlobalState hook
jest.mock('../src/components/GlobalStateContext', () => ({
  useGlobalState: jest.fn(),
}));

describe('Page', () => {
  useGlobalState.mockReturnValue({
    forecastData: mockForecastData,
  });

  it('renders the page', () => {
    const params = { id: '1715860800' };
    render(<Page params={params} />);

    //screen.debug();

    expect(
      screen.getByText((content) => content.includes('The weather in Sofia'))
    ).toBeInTheDocument();
  });
});
