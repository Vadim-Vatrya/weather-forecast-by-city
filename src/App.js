import { ToastContainer } from 'react-toastify';

import Container from './components/Container';
// import Weatherboard for './components/Weatherboard';

import './scss/_main.scss';

function App() {
  return (
    <>
      <Container>
        {/* <Weatherboard /> */}
        <ToastContainer autoClose={3700} position="bottom-center" />
      </Container>
    </>
  );
}

export default App;
