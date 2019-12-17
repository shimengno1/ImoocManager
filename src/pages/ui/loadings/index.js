import React from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './../ui.less'
export default class Loadings extends React.Component {
  render() {
    const icon = <Icon type="plus" style={{ fontSize: 24 }}></Icon>
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{ margin: '0 10px' }} />
          <Spin size="large" />
          <Spin indicator={icon} style={{ marginLeft: 10 }}></Spin>
        </Card>
        <Card title="内容遮罩">
          <Alert></Alert>
          
        </Card>
      </div>
    )
  }
}
