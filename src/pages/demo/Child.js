import React from 'react'

export default class Child extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }
  UNSAFE_componentWillMount () {
    console.log("Will Mount")
  }
  componentDidMount () {
    console.log("Did Mount")
  }
  UNSAFE_componentWillReceiveProps (newProps) {
    console.log("will Props" + newProps.name)
  }
  shouldComponentUpdate () {
    console.log("should update");
    return true
  }
  UNSAFE_componentWillUpdate () {
    console.log('Will Update');
  }
  componentDidUpdate () {
    console.log('Did Update')
  }
  render () {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}
