import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Jumbotron, Button} from 'react-bootstrap';
import '../css/main.css';

class LoggedIn extends React.Component {
    render() {
        return (
            <div>
                <Navbar style={{marginBottom:50}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span id="page-title">首页（工作室成员登录）</span><span>，此页面能导航至：</span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">工作室作品展示页</NavItem>
                        <NavItem eventKey={2} href="#">工作室内部作品平台（新增入口）</NavItem>
                    </Nav>
                </Navbar>
                <Jumbotron style={{height:300}}>
                    <h1 style={{lineHeight:'150px'}}>Banner</h1>
                </Jumbotron>
                <Jumbotron>
                    <h2>工作室简介</h2>
                </Jumbotron>
                <Jumbotron>
                    <h2>主要成员</h2>
                </Jumbotron>
                <Jumbotron>
                    <h2>代表作品</h2>
                    <Button bsStyle="primary">查看更多</Button>
                </Jumbotron>
                <Jumbotron>
                    <h2>联系方式和Footer</h2>
                </Jumbotron>
            </div>
        );
    }
}

export default LoggedIn;