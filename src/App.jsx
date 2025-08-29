import React from "react";
import { TodoEditor } from "./components/TodoEditor/TodoEditor";
import { TodoList } from "./components/TodoList/TodoList";
import { Filter } from "./components/Filter/Filter";
import { Info } from "./components/Info/Info";
import data from "./data/data.json";
import style from "./App.module.scss";

class App extends React.Component {
  state = {
    tasks: data,
    filter: "",
  }

  handleRemove = (ev) => {
    this.setState({
      tasks: this.state.tasks.filter(el => el.id !== ev.target.parentElement.dataset.id),
    });
  }

  handleSubmit = (ev, clearState) => {
    ev.preventDefault();

    this.setState((prev) => {
      let newID;

      if (prev.tasks[0]) {
        newID = `id-${Number(prev.tasks[prev.tasks.length - 1].id.split("-")[1]) + 1}`;
      } else {
        newID = "id-1";
      }

      return {
        tasks: [...prev.tasks, { id: newID, text: ev.target.elements.text.value, checked: false }],
      }
    });

    clearState();
  }

  handleComplete = (ev) => {
    this.setState((prev) => {
      return {
        tasks: prev.tasks.map((el) => {
          if (el.id === ev.target.dataset.id) {
            return {
              ...el,
              completed: !el.completed,
            };
          }
          return el;
        }),
      };
    });
  }

  handleFilterChange = (ev) => {
    this.setState({
      filter: ev.target.value,
    });
  }

  render() {
    return (
      <>
        <h1 className={style.title}>ToDo List</h1>
        <div className={style.info__block}>
          <Info data={this.state.tasks} />
          <Filter filter={this.state.filter} onFilterChange={this.handleFilterChange} />
        </div>
        <div className={style.wrapper}>
          <TodoEditor onSubmit={this.handleSubmit} />
          <div className={style.todo__wrap}>
            <TodoList
              tasks={this.state.tasks}
              onRemove={this.handleRemove}
              onComplete={this.handleComplete}
              filter={this.state.filter}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
