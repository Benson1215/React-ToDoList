import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
 
import TodoIndex from './components/TodoIndex';
import TodoCreate from './components/TodoCreate';
import TodoEdit from './components/TodoEdit';
import TodoDelete from './components/TodoDelete';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={TodoIndex} exact/>
             <Route path="/todo/index" component={TodoIndex}/>
             <Route path="/todo/create" component={TodoCreate}/>
             <Route path="/todo/edit/:id" component={TodoEdit}/>
             <Route path="/todo/delete/:id" component={TodoDelete}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
