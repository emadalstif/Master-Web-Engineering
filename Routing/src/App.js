import React, {Component} from 'react';
import './apps.css';


import Navhtml from './components/Navhtml';
import Navcss from './components/Navcss';
import Navjavascript from './components/Navjavascript';
import Navother from './components/Navother';
import Article from './components/Article';
import ArticleHtml1 from './components/ArticleHtml1';
import Aside from './components/Aside';
import Footer from './components/Footer';


import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {

 render() {
  return (

        <BrowserRouter>
            <Header />
            <div className="App">
            <Route exact path='/' component={Navhtml} />
            <Route path='/css' component={Navcss} />
            <Route path='/javascript' component={Navjavascript} />
            <Route path='/others' component={Navother} />
            <Route path='html1' component={ArticleHtml1}/>
            <Route path='/html2' component={Article}/>
            <Article />
            <Aside />
            <Footer />  
            </div>
        </BrowserRouter> 
 
  );
}
}
export default App;

