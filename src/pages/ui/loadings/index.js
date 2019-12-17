import React from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './../ui.less'
export default class Loadings extends React.Component {
  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }}></Icon>
    const iconLoading = <Icon type="loading" style={{ fontSize: 24 }}></Icon>
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{ margin: '0 10px' }} />
          <Spin size="large" />
          <Spin indicator={icon} style={{ marginLeft: 10 }}></Spin>
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert
            type="info"
            message="React"
            description="欢迎来到React高级实战课程"
          />
          <Spin>
            <Alert
              type="warning"
              message="React"
              description="欢迎来到React高级实战课程"
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              type="warning"
              message="React"
              description="欢迎来到React高级实战课程"
            />
          </Spin>
          <Spin indicator={iconLoading}>
            <Alert
              type="warning"
              message="React"
              description="欢迎来到React高级实战课程"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}
