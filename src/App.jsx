import { Provider } from 'react-redux';
import MiniMarket from './components/MiniMarket';
import store from './store';
import './App.css';

function App() {

  return (
    <Provider store={store} >

      <MiniMarket />
      
    </Provider>
  )
}

export default App
