import Header from './MyComponents/Header';
import Home from './MyComponents/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Header title='MyTodos' />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
