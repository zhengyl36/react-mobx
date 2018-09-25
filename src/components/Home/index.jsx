import React from 'react';
import './index.scss';
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router-dom'

@inject('numbers')
@observer
class Home extends React.Component {
    render() {
        const numbers = this.props.numbers;
        return (
            <div className="home">
                <p>hello</p>
                <p>{numbers.numbers}</p>
                <Link to="/login" className="btn-login">Login</Link>
                <button onClick={numbers.increase}>increase</button>
                <button onClick={numbers.decrease}>decrease</button>
            </div>
        )
    }
}

export default Home;