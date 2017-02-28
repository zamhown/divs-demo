import React from 'react';
import { DropdownButton, MenuItem, Badge } from 'react-bootstrap';
import '../../css/Header.css';

class Header1 extends React.Component {
    render() {
        return (
            <div className="App-header row">
                <a id="logo" className="col-sm-6 h1 text-left" href="#/loggedIn">DIVS-demo</a>
                <div className="col-sm-6 text-right">
                    <DropdownButton title="用户头像" id="bg-nested-dropdown">
                        <MenuItem eventKey="1">站内私信 <Badge className="red-item">1</Badge></MenuItem>
                        <MenuItem eventKey="2">我的任务 <Badge className="red-item">1</Badge></MenuItem>
                        <MenuItem eventKey="3" href="#/loggedIn/userCenter">用户中心</MenuItem>
                        <MenuItem eventKey="4" href="#/">退出登录</MenuItem>
                    </DropdownButton>
                </div>
            </div>
        );
    }
}

export default Header1;