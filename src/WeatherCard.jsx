import { Header } from './components/Header';
import { Graph } from './components/Graph';
import { DayGrid } from './components/DayGrid';

export const WeatherCard = () => {
  return (
    <div className="weathercard">
      <Header />
      <Graph />
      <DayGrid />
    </div>
  );
};
