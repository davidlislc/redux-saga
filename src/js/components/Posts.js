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
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.remoteArticles);
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getDataAction }
)(Post);
