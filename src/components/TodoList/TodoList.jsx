import React from "react";
import style from "./TodoList.module.scss";

export class TodoList extends React.Component {
  render() {
    return (
      <>
        {
          !this.props.tasks[0]
            ? <p className={style.notification}>No tasks yet!</p>
            : <ul className={style.todo}>
              {this.props.tasks.filter(el => {
                if (this.props.filter !== "") {
                  return el.text.toLowerCase().includes(this.props.filter.toLowerCase())
                }

                return el;
              }).map((el, id) => (
                <li className={style.todo__item} key={id} data-id={el.id} onClick={this.props.onComplete}>
                  <p className={style.todo__text} onClick={this.props.onComplete}>{el.completed ? "✅" : "⛔"} {el.text}</p>
                  <button className={style.todo__remove} onClick={this.props.onRemove}>Remove</button>
                </li>
              ))}
            </ul>
        }
      </>
    );
  }
}
