import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { firestore } from './firebase';
function App() {
  const db=firestore.collection("users").add({name:"alperen"});
  return (
   <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
        
    </div>
   </Router>
  );
}

export default App;
