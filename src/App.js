import BodyContent from './components/BodyContent.js'
import SideBar from './utils/Sidebar/SideBar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from '../src/components/Home'
import About from '../src/components/About'


function App() {
  return (
    <BrowserRouter>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </div>
    </BrowserRouter>
  );
}

export default App;
