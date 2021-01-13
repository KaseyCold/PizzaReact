import axios from 'axios';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components/';
import { Home, Cart } from './pages';

export default function App() {
  const [pizzas, setPizzas] = React.useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas))
    // fetch('http://localhost:3000/db.json')
    //   .then((resp) => resp.json())
    //   .then((json) => {
    //     setPizzas(json.pizzas);
    //   });

  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />{' '}
        <div className="content">
          <Route path="/" render={() => <Home items={pizzas} />} exact />
          <Route path="/Cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}
