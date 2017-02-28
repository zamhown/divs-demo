import React from 'react';
import { Button } from 'react-bootstrap';
import '../../css/Header.css';

class Header0 extends React.Component {
    render() {
        return (
            <div className="App-header row">
                <a id="logo" className="col-sm-6 h1 text-left" href="#/">DIVS-demo</a>
                <div className="col-sm-6 text-right">
                    <Button href="#/login">点击登录</Button>
                </div>
            </div>
        );
    }
}

export default Header0;