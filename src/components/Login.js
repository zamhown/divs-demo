import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Button, Form, FormGroup, Col, Checkbox, ControlLabel, FormControl} from 'react-bootstrap';
import '../css/main.css';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Navbar style={{marginBottom:50}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span id="page-title">登录页</span><span>，此页面能导航至：</span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#/signUp">注册页</NavItem>
                    </Nav>
                </Navbar>
                <div  className="row">
                    <div className="col-md-6 col-md-push-3 text-left">
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalName">
                                <Col componentClass={ControlLabel} sm={2}>
                                    用户名
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="用户名" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    密码
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="密码" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Checkbox>记住我</Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit" bsStyle="success" href="#/loggedIn">
                                        登录
                                    </Button>&nbsp;&nbsp;
                                    <Button href="#/signUp">
                                        注册
                                    </Button>
                                    <p><br /><a className="btn-link">点击这里测试管理员用户登录的情况</a></p>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;