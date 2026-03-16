
import { Suspense } from 'react';
import './App.css';
import FoodSection from './components/FoodSection/FoodSection';
import Navbar from './components/Navbar/Navbar';


const FoodDataRes = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res => res.json());

function App() {

  return (
    <>

      <Navbar></Navbar>
      <Suspense fallback={<p>Loading...</p>}>
        <FoodSection FoodDataRes={FoodDataRes}></FoodSection>

      </Suspense>
    </>
  )
}

export default App
