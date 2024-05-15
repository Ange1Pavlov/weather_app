import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useGlobalState } from '../src/components/GlobalStateContext';
import Page from '../src/app/page';
import mockForecastData from '../src/data/forecast.json';
import mockWeatherData from '../src/data/weather.json';

jest.mock('../src/components/GlobalStateContext', () => ({
  useGlobalState: jest.fn(),
}));

describe('Page', () => {
  it('renders the page', () => {
    useGlobalState.mockReturnValue({
      weatherData: mockWeatherData,
      forecastData: mockForecastData,
    });

    render(<Page />);

    expect(
      screen.getByText((content) => content.includes('Sofia'))
    ).toBeInTheDocument();

    expect(
      screen.getByText((content) => content.includes('280.47'))
    ).toBeInTheDocument();
  });
});
