import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard';
import { Create } from './pages/create';
import { useWeb3 } from './hooks/useWeb3';

function App() {
  const { web3, wallet, enable, networkId } = useWeb3();

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Dashboard wallet={wallet} web3={web3} enable={enable} networkId={networkId} />} />
        <Route exact path='/create' element={<Create wallet={wallet} web3={web3} enable={enable} networkId={networkId} />} />
      </Routes>
    </Router>
  );
}

export default App;
