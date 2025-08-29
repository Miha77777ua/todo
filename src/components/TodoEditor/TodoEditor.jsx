import React from "react";
import style from "./TodoEditor.module.scss";

export class TodoEditor extends React.Component {
  state = {
    textValue: "",
  }

  handleTextChange = (ev) => {
    this.setState({
      textValue: ev.target.value,
    });
  }

  clearState = () => {
    this.setState({
      textValue: "",
    });
  }

  render() {
    return (
      <form className={style.form} onSubmit={(ev) => this.props.onSubmit(ev, this.clearState)}>
        <input
          type="text"
          placeholder="Task's name"
          className={style.form__input}
          value={this.state.textValue}
          onChange={this.handleTextChange}
          name="text"
          maxLength="35"
        />
        <button className={style.form__submit} type="submit">Add Task</button>
      </form>
    );
  }
}

