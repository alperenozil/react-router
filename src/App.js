import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
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
          <Route path="/:id" children={<Child />} />
        </Switch>
    </div>
   </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
