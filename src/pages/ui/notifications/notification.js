import React, { Component } from "react";
import { Card, Button, Notification } from "antd";
export default class notification extends Component {
  openNotification = () => {
    Notification.success({
      message: '发工资了',
      description: '上个月发工资了'
    });
  };
  render() {
    return (
      <div>
        <Card title="通知提示框" className="card-wrap">
          <Button type="primary" onClick={this.openNotification}></Button>
        </Card>
      </div>
    );
  }
}
