import React from 'react';

import axios from 'axios';
import { Route } from 'react-router-dom';
import { Header } from './components/';
import { Home, Cart } from './pages';
import { useDispatch } from 'react-redux';

import { setPizzas } from './redux/action/pizzas';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />{' '}
        <div className="content">
          <Route path="/" component={() => <Home />} exact />
          <Route path="/Cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

//     axios
//       .get('http://localhost:3000/db.json')
//       .then(({ data }) => setPizzas(data.pizzas));
//     // fetch('http://localhost:3000/db.json')
//     //   .then((resp) => resp.json())
//     //   .then((data) => {
//     //     setPizzas(data.pizzas);})

// export default connect(mapStateToProps, mapDispatchToProps)(App);
