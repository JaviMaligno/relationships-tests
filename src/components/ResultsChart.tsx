import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';

interface ResultsChartProps {
  data: Array<{
    name: string;
    value: number;
    description: string;
  }>;
  maxValue: number;
  highestKey: string;
}

const ResultsChart: React.FC<ResultsChartProps> = ({ data, maxValue, highestKey }) => {
  return (
    <div className="results-chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={60}
            interval={0}
          />
          <YAxis domain={[0, maxValue]} />
          <Tooltip 
            formatter={(value, name, props) => [value, props.payload.description]}
            labelFormatter={(label) => `${label}`}
          />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.name === highestKey ? '#8884d8' : '#82ca9d'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsChart; 