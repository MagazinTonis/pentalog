import React, {Component} from 'react';
import './App.css';
import Header from './comp/header';
import Exercitii from './comp/exercitii';
import Footer from './comp/footer';
import Pex from './comp/piept.ex';


class App extends Component {
  render(){
return(
        <div>
          <Header/>
          <section className='back'>
            <h1 className='text-center'>Nu exista limite!</h1>
          </section>
          <Exercitii/>
          <Pex/>
          <Footer/>
        </div>
      );
   }
}

export default App;
