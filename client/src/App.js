import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Route exact path="/" component={Fib} />
        <Route exact path="/otherpage" component={OtherPage} />
      </div>
        <Link to="/">home</Link>
        <Link to="/otherpage">other page</Link>
    </div>
    </Router>
  );
}

export default App;
