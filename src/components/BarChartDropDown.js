import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';


const datasets = [
  {
    label: 'Dataset 1',
    data: [10, 20, 30, 40, 50],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
  },
  {
    label: 'Dataset 2',
    data: [50, 40, 30, 20, 10],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
  },
];

const BarChartComponent = () => {
  const [selectedDatasetIndex, setSelectedDatasetIndex] = useState(0);

  const data = {
    labels: ['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5'],
    datasets: [datasets[selectedDatasetIndex]],
  };

  const options = {
    scales: {
      x: { type: 'category' },
      y: { beginAtZero: true },
    },
  };

  return (
    <div>
      <select
        value={selectedDatasetIndex}
        onChange={(e) => setSelectedDatasetIndex(e.target.value)}
      >
        {datasets.map((dataset, index) => (
          <option key={index} value={index}>
            {dataset.label}
          </option>
        ))}
      </select>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartComponent;
