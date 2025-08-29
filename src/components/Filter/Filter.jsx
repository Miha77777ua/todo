import React from "react";
import style from "./Filter.module.scss";

export class Filter extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder="🔍Filter..."
        className={style.form__filter}
        value={this.props.filter}
        onChange={this.props.onFilterChange}
      />
    );
  }
}
