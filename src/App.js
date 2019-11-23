import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Book from './components/Book/Book';
import AddBook from './components/Book/AddBook';

function NoMatch(){
  return <h2>404, Halaman Tidak Ditemukan</h2>
}

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>          
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link">Home</Link></li>
                <li><Link to={'/buku'} className="nav-link">Book</Link></li>
              </ul>
            </nav>
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/buku' exact component={Book} />
              <Route path='/AddBook' exact component={AddBook} />
              <Route component={NoMatch} />
            </Switch>
          </main>
          <footer>
            <p className="bg-dark text-light text-center my-2 p-2">&copy; Rezky Putra Akkif 2019</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
