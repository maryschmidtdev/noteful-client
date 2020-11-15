import React from "react";

class AddErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {}

  render() {
    if (this.state.hasError) {
      return <h1>Somthing went wrong</h1>;
    }
    return this.props.children;
  }
}
export default AddErrorBoundry;
