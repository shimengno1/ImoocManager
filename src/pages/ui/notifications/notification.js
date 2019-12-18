import React, { Component } from "react";
import { Card, Button } from "antd";

class notification extends Component {
  openNotification = () => {
    notification.success({});
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

export default notification;
