import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Button, Col, Panel, Badge, Tabs, Tab, Pagination} from 'react-bootstrap';
import ArtworkQueryForm from './Ctrls/ArtworkQueryForm.js';
import ArtworkList from './Ctrls/ArtworkList.js';
import '../css/main.css';
import style from '../css/UserCenter.css';

class UserCenter extends React.Component {
    render() {
        return (
            <div>
                <Navbar style={{marginBottom:50}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span id="page-title">用户中心</span><span>，此页面能导航至：</span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">用户信息修改页</NavItem>
                        <NavItem eventKey={2} href="#">个人主页</NavItem>
                        <NavItem eventKey={3} href="#">个人主页设置页</NavItem>
                        <NavItem eventKey={4} href="#">投稿新建、修改页</NavItem>
                    </Nav>
                </Navbar>
                <Panel header={'用户信息'} bsStyle="primary">
                    <div className="row">
                        <Col md={2} className="text-right">
                            <div className={style.headPic}></div>
                        </Col>
                        <Col md={2} className="text-left">
                            <p>用户名 ♂</p>
                            <p>Lv.10&nbsp;&nbsp;<Badge>一代宗师</Badge></p>
                        </Col>
                        <Col md={4} className="text-left">
                            <p>投稿数：20&nbsp;&nbsp;&nbsp;&nbsp;经验值：1234/2000</p>
                            <p>投稿共被浏览：1000次&nbsp;&nbsp;&nbsp;&nbsp;主页共被浏览：100次</p>
                            <p>特长：&nbsp;&nbsp;<Badge>平面设计</Badge>&nbsp;&nbsp;<Badge>影视后期</Badge></p>
                        </Col>
                        <Col md={4} className="text-right">
                            <p><Button bsStyle="primary">修改信息</Button>&nbsp;&nbsp;<Button bsStyle="info">新投稿</Button></p>
                            <p><Button>前往我的主页</Button>&nbsp;&nbsp;<Button>主页设置</Button></p>
                        </Col>
                    </div>
                </Panel>
                <Tabs defaultActiveKey={1}>
                    <Tab eventKey={1} title="投稿管理">
                        <ArtworkQueryForm />
                        <ArtworkList className={style.artworkList} title="投稿作品" hasEditBtn="true" hasDelBtn="true"/>
                        <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            items={20}
                            maxButtons={5}
                            activePage={1} />
                    </Tab>
                    <Tab eventKey={2} title="我的收藏">
                        <ArtworkQueryForm />
                        <ArtworkList className={style.artworkList} title="收藏作品" hasDelBtn="true" hasAuthor="true"/>
                        <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            items={20}
                            maxButtons={5}
                            activePage={1} />
                    </Tab>
                    <Tab eventKey={3} title="谁在@朕">
                        <ArtworkQueryForm />
                        <ArtworkList className={style.artworkList} title="作品" hasTag="true" hasAuthor="true"/>
                        <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            items={20}
                            maxButtons={5}
                            activePage={1} />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default UserCenter;