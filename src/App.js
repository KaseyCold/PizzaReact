import axios from 'axios';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components/';
import { Home, Cart } from './pages';
import { connect } from 'react-redux';

import { setPizzas } from './redux/action/pizzas';

//  function App() {
//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/db.json')
//       .then(({ data }) => setPizzas(data.pizzas));
//     // fetch('http://localhost:3000/db.json')
//     //   .then((resp) => resp.json())
//     //   .then((json) => {
//     //     setPizzas(json.pizzas);
//     //   });
//   }, []);

//   return (
//     <div className="App">
//       <div className="wrapper">
//         <Header />{' '}
//         <div className="content">
//           <Route path="/" render={() => <Home items={pizzas} />} exact />
//           <Route path="/Cart" component={Cart} exact />
//         </div>
//       </div>
//     </div>
//   );
// }
class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="wrapper">
          <Header />{' '}
          <div className="content">
            <Route
              path="/"
              render={() => <Home items={this.props.items} />}
              exact
            />
            <Route path="/Cart" component={Cart} exact />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = { setPizzas };

export default connect(mapStateToProps, mapDispatchToProps)(App);
