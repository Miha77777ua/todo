import React from "react";
import style from "./Info.module.scss";

export class Info extends React.Component {
  render() {
    return (
      <>
        <p className={style.total}>Total: {this.props.data.length}</p>
        <p className={style.completed}>Completed: {this.props.data.filter(el => el.completed).length}</p>
      </>
    );
  }
}
