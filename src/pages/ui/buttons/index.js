import React, { Component } from 'react'
import { Button, Card, Icon, Radio } from 'antd'
import '../ui.less'
const RadioGroup = Radio.Group
const ButtonGroup = Button.Group
export default class Buttons extends Component {
  state = {
    loading: true,
    size: 'default'
  }
  handCloseLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }
  handChange = e => {
    this.setState({
      size: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">普通按钮</Button>
          <Button>普通按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="danger">警告按钮</Button>
          <Button disabled>禁用按钮</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="detele">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">
            搜索
          </Button>
          <Button type="primary" icon="download">
            下载
          </Button>
        </Card>
        <Card title="Loading按钮" className="card-wrap">
          <Button type="primary" loading={this.state.loading}>
            确定
          </Button>
          <Button
            type="primary"
            shape="circle"
            loading={this.state.loading}
          ></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handCloseLoading}>
            关闭
          </Button>
        </Card>
        <Card title="按钮组" style={{ marginBottom: 10 }}>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left"></Icon>
              Go back
            </Button>
            <Button type="primary">
              Go forward
              <Icon type="right"></Icon>
            </Button>
            <Button></Button>
          </ButtonGroup>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <RadioGroup size={this.state.size} onChange={this.handChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </RadioGroup>
          <Button type="primary" size={this.state.size}>
            普通按钮
          </Button>
          <Button type="primary" size={this.state.size}>
            普通按钮
          </Button>
          <Button type="primary" size={this.state.size}>
            普通按钮
          </Button>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <RadioGroup size={this.state.size} onChange={this.handChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </RadioGroup>
          <Button type="primary" size={this.state.size}>
            普通按钮
          </Button>
          <Button type="primary" size={this.state.size}>
            普通按钮
          </Button>
          <Button type="primary" size={this.state.size}>
            普通按钮
          </Button>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <RadioGroup size={this.state.size} onChange={this.handChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </RadioGroup>
          <Button type="primary" size={this.state.size}>
            普通按钮
          </Button>
          <Button type="primary" size={this.state.size}>
            普通按钮
          </Button>
          <Button type="primary" size={this.state.size}>
            普通按钮
          </Button>
        </Card>
      </div>
    )
  }
}
