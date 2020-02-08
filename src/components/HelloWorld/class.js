import React from "react";
import { Select } from "./Select";
import "./styles.css";

export class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRecord: { value: "", text: "" },
      list: [
        { text: "foo", value: 1 },
        { text: "bar", value: 1 }
      ],
      selectedValue: null
    };
  }

  handleListChange(e) {
    e.preventDefault();
    this.setState(
      {
        list: [...this.state.list, this.state.newRecord],
        newRecord: { value: "", text: "" }
      },
      () => {
        console.log("next:", this.state);
      }
    );
  }

  handleNewRecordChange(e) {
    this.setState(
      {
        newRecord: { ...this.state.newRecord, [e.target.name]: e.target.value }
      },
      () => {
        console.log("next:", this.state);
      }
    );
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <div>{children}</div>
        <Select dataSource={this.state.list} />
        <input
          name="text"
          type="text"
          value={this.state.newRecord.text}
          onChange={this.handleNewRecordChange.bind(this)}
        />
        <input
          name="value"
          type="number"
          value={this.state.newRecord.value}
          onChange={this.handleNewRecordChange.bind(this)}
        />
        <button onClick={this.handleListChange.bind(this)}>aggiungi +</button>
      </div>
    );
  }
}
