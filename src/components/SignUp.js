import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Button, Form, FormGroup, Col, Checkbox, ControlLabel, FormControl, Radio, InputGroup} from 'react-bootstrap';
import '../css/main.css';

class SignUp extends React.Component {
    render() {
        return (
            <div>
                <Navbar style={{marginBottom:50}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span id="page-title">注册页</span><span>，此页面能导航至：</span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#/loggedIn/userCenter">用户中心</NavItem>
                    </Nav>
                </Navbar>
                <div  className="row">
                    <div className="col-md-6 col-md-push-3 text-left">
                        <Form horizontal>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    <span className="text-danger">*</span>用户名
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="用户名" />
                                    <p className="text-info">由字母、数字、连字符组成，20字以内</p>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    <span className="text-danger">*</span>密码
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="密码" />
                                    <p className="text-info">不能少于6位</p>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    <span className="text-danger">*</span>确认密码
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="确认密码" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    真实姓名
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="真实姓名" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    性别
                                </Col>
                                <Col sm={10}>
                                    <Radio inline>
                                        男
                                    </Radio>
                                    {' '}
                                    <Radio inline>
                                        女
                                    </Radio>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    学校
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="如：东华大学" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    所学专业
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="如：媒体" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    届数
                                </Col>
                                <Col sm={10}>
                                    <InputGroup>
                                        <FormControl type="text" placeholder={'如：' + (new Date().getFullYear()-1)}/>
                                        <InputGroup.Addon>届</InputGroup.Addon>
                                    </InputGroup>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    爱好特长
                                </Col>
                                <Col sm={10}>
                                    <Checkbox inline>
                                        平面设计
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline>
                                        摄影摄像
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline>
                                        影视后期
                                    </Checkbox>
                                    {' '}<br />
                                    <Checkbox inline>
                                        二维动画
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline>
                                        交互设计
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline>
                                        3D设计
                                    </Checkbox>
                                    {' '}<br />
                                    <Checkbox inline>
                                        新媒体运营
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline>
                                        网站开发
                                    </Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit" bsStyle="success" href="#/loggedIn/userCenter">
                                        注册
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;