import React from 'react';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import asyncComponent from '../components/AsyncComponent'

const Login = asyncComponent(() => import("../components/Login"));
const Home = asyncComponent(() => import("../components/Home"));

const routeConfig = (
	<HashRouter>
		<Switch>
			<Route path="/home" component={Home}/>
			<Route path="/login" component={Login}></Route>
            <Redirect exact path="/" to={{pathname: '/home'}} />
		</Switch>
	</HashRouter>
)

export default routeConfig;