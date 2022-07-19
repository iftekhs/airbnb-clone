import './App.css';
import Home from  './Home.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Pages from './Pages'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './SearchPage.js'

function App() {
  return (
    <div className="app">


    <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
            <Pages/>
          </Route>
          <Route path="/">
            <Home />
            <Pages/>
          </Route>
        </Switch>
        
       

        <Footer />
      </Router>

   {/*Search Page*/}
    </div>
  );
}


export default App;
