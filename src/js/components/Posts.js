import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataAction } from "../actions/GetDataAction";

export class Post extends Component {
  componentDidMount() {
    this.props.getDataAction();
  }
  render() {
    return (
      <ul>
        {this.props.articles}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.remoteArticles);
  return {
    articles: state.remoteArticles
  };
}

export default connect(
  mapStateToProps,
  { getDataAction }
)(Post);
