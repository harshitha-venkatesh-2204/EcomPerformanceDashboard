import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function App() {
  return (
    <div>
     <Header/>
     <Home/>
     <Footer/> 
   </div>
  );
}

export default App;
