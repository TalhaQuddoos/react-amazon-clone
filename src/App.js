import { useState, useEffect } from "react" 
import './App.css';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import Login from './Login'


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { db, auth } from './firebase'

  
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems)
    })

  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null);
    })
  }



  useEffect(() => {
    getCartItems();
  }, []);



  return (
    <>

      <Router>
        {
          !user ? (
            <Login setUser={setUser} />
          ) : (
            <>
              <Header signOut={signOut} user={user} cartItems={cartItems} />

              <Switch>
                <Route path="/login">
                  <Login setUser={setUser} />
                </Route>
                <Route path="/cart">
                  <Cart items={cartItems} />
                </Route>

                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </>
          )
        }
        
        
      </Router>
    </>
  )
}



export default App;
