import React from 'react';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import asyncComponent from '../modules/AsyncComponent'

const Login = asyncComponent(() => import("../modules/Login"));
const Home = asyncComponent(() => import("../modules/Home"));

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