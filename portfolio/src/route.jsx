import React, { Component } from 'react'


import './portfolio.css'
import Portfolio from "./newfolio";
import Calendar from './demo/caledar'
import Formdemo from './demo/formdemo.jsx'
import Todolist from './demo/todolist'
import Python from './demo/python'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



class Routes extends Component {
    state = {}

    render() {
        return (
            <Router>
                <div className="portfolio">
                    <Switch>


                        <Route path="/" exact component={Portfolio} />
                        <Route path="/python" component={Python} />
                        <Route path="/calendar" component={Calendar} />
                        <Route path="/formdemo" component={Formdemo} />
                        <Route path="/todolist" component={Todolist} />
                       
                    </Switch>

                </div>




            </Router>
        );
    }
}

export default Routes;
