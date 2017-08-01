import React, { Component } from "react";
import { omit } from "lodash";

export default (ComposedComponent, propsToOmit = []) =>
  class extends Component {
    render() {
      return <ComposedComponent {...omit(this.props, propsToOmit)} />;
    }
  };
