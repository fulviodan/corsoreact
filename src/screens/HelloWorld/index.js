import React, { useState, useRef } from "react";
import { Select, Textbox } from "../../components";

export function HelloWorld() {
  const [newRecord, setNewRecord] = useState({ value: "", text: "" });
  const [list, setList] = useState([
    { text: "foo", value: 1 },
    { text: "bar", value: 1 }
  ]);
  const [selectedValue, setSelectedValue] = useState(undefined);

  function handleListChange(e) {
    e.preventDefault();
    setList([...list, newRecord]);
  }

  function handleNewRecordChange(e) {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  }

  function handleSelectValueChange(e) {
    setSelectedValue(e.target.value);
  }

  return (
    <div>
      <Select
        dataSource={list}
        value={selectedValue}
        onChange={handleSelectValueChange}
      />
      <Textbox
        name="text"
        value={newRecord.text}
        onChange={handleNewRecordChange}
      />
      <Textbox
        name="value"
        value={newRecord.value}
        onChange={handleNewRecordChange}
      />
      <button onClick={handleListChange}>aggiungi +</button>
    </div>
  );
}
