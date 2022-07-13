import { Route, Routes } from 'react-router-dom';
import OpinionRating from './OpinionComponent.js';
import ThanksMessage from './ThanksMessage.js'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<OpinionRating />}/> 
      <Route path='/thanks' element={<ThanksMessage/>}/> 
    </Routes>
    </>
  );
}

export default App;
