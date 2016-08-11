import React, { Component } from 'react'
import { render } from 'react-dom'
import { Menu, Icon, Breadcrumb } from 'antd'
const SubMenu = Menu.SubMenu
import jQuery from 'jquery'
import Config from '../../config/'
import MenuTag from '../components/menu/MenuTag'
import { Router, Route, browserHistory, IndexRoute, Link, IndexLink } from 'react-router'
import NavLink from '../components/menu/NavLink'

import Dashboard from './index/Dashboard'
import About from './index/About'
import Contact from './index/Contact'
import NoMatch from './index/NoMatch'
import Settings from './index/Settings'
import ApplyForm from './index/ApplyForm'
import UserApp from './index/UserApp'

const serviceUrl = Config.get('/service')

let App = React.createClass({
  getInitialState() {
    if (!localStorage.getItem('token') || !localStorage.getItem('profile')) {
      location.href='/login'
    }
    // Get registered website
    const profile = JSON.parse(localStorage.getItem('profile'))
    return {
      username: profile.username,
      userApps: []
    }
  },
  componentDidMount() {
    var _this = this
    jQuery.ajax({
      type: 'GET',
      url: `${serviceUrl}/app`,
      headers: {
        Authorization: window.localStorage.getItem('token')
      },
      success: function (data) {
        _this.setState({ userApps: _this.state.userApps.concat(data) })
      },
      error: function (err) {

        // TODO use AntD modal
        alert('对不起，请重新登录')
        location.href = '/login'
      }
    })
  },
  render() {
    return (
      <div className="ant-layout-aside">
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                <path d="M 4 4 L 44 4 L 44 44 Z" fill="#a88add"></path>
                <path d="M 4 4 L 34 4 L 24 24 Z" fill="rgba(0,0,0,0.15)"></path>
                <path d="M 4 4 L 24 4 L 4  44 Z" fill="#0cc2aa"></path>
              </svg> <span style={{ position: 'relative', bottom: '7px', color: 'white' }}> 网 站 管 家</span>
            </h3>
          </div>
          <Menu mode="inline" theme="dark"
            defaultSelectedKeys={['dashboard']} defaultOpenKeys={['dashboard']}>

            <MenuTag text="我的管家" />
            <Menu.Item key="dashboard">
              <IndexLink to="/" activeClassName="active"><Icon type="home" />首页</IndexLink>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="desktop" />我的网站</span>}>
              {this.state.userApps.map(function (row, i) {
                return (
                  <Menu.Item key={i}><NavLink to={'/app/' + row._id}>{row.app_name}</NavLink></Menu.Item>      
                )
              })}
            </SubMenu>
            <Menu.Item><NavLink to="/apply"><Icon type="area-chart" />申请检测新网站</NavLink></Menu.Item>

            <MenuTag text="用户中心" />
            <Menu.Item key="user"><NavLink to="/settings"><Icon type="user" />账号设置</NavLink></Menu.Item>

            <MenuTag text="帮助中心" />
            <Menu.Item key="contact"><NavLink to="/contact"><Icon type="mail" />联系我们</NavLink></Menu.Item>
            <Menu.Item key="about"><NavLink to="/about"><Icon type="team" />关于我们</NavLink></Menu.Item>
          </Menu>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header">
          
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ minHeight: '400px' }}>
                {this.props.children || <Dashboard />}
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          Powered By James Gu © 2015 
          </div>
        </div>
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      
      <IndexRoute component={Dashboard} />

      <Route path="/app/:appid" component={UserApp}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/settings" component={Settings}></Route>
      <Route path="/apply" component={ApplyForm}></Route>
      <Route path="*" component={NoMatch}/>
    </Route>
   
  </Router> 
), document.getElementById('app'))
