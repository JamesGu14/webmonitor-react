import React, { Component } from 'react'
import { render } from 'react-dom'
import { Menu, Icon, Breadcrumb } from 'antd'
const SubMenu = Menu.SubMenu
import jQuery from 'jquery'
import Config from '../../config/'
import MenuTag from '../components/menu/MenuTag'
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
        console.log(_this.state.userApps)
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
            <Menu.Item key="dashboard"><a href="#"><Icon type="home" />首页</a></Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="desktop" />我的网站</span>}>
              {this.state.userApps.map(function (row, i) {
                return (
                  <Menu.Item key={i}><a href="#">{row.app_name}</a></Menu.Item>      
                )
              })}
            </SubMenu>
            <Menu.Item><a href="#"><Icon type="area-chart" />申请检测新网站</a></Menu.Item>

            <MenuTag text="用户中心" />
            <Menu.Item key="user"><a href="#"><Icon type="user" />用户中心</a></Menu.Item>

            <MenuTag text="帮助中心" />
            <Menu.Item key="contact"><a href="#"><Icon type="mail" />联系我们</a></Menu.Item>
            <Menu.Item key="about"><a href="#"><Icon type="team" />关于我们</a></Menu.Item>
          </Menu>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header">
          
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ minHeight: '400px' }}>
                {this.state.username}
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

render(
  <App />,
  document.getElementById('app')
)
