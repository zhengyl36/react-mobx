import React from 'react'
import './index.less'
import {inject, observer} from "mobx-react";
import {HTTPGet} from '../../config/http'

@inject('numbers')

@observer
class Login extends React.Component {
    componentWillMount(){
        HTTPGet('json/area.json').then((res)=>{
            console.log(res);
        })
    }

    render() {
        const numbers = this.props.numbers;

        return (
            <div className="login">
                <p>Login Page {numbers.numbers}</p>
            </div>
        )
    }
}

export default Login;