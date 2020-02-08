import React, { useState, useEffect, useRef } from "react";
import { Table } from "../../components";
import { getPeople, createPerson, deletePerson } from "../../api";

export function HelloWorld() {
  const [newRecord, setNewRecord] = useState({ name: "", surname: "" });
  const [list, setList] = useState([]);

  useEffect(() => {
    handleDataFetch();
  }, []);

  function handleRowAdd(e) {
    createPerson(newRecord).then(() => {
      setNewRecord(undefined);
      handleDataFetch();
    });
  }

  function handleInputChange(e) {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  }

  function handleDataFetch() {
    getPeople().then(result => {
      setList(result.data);
    });
  }

  function handleRowDelete(e) {
    deletePerson(e.target.value).then(result => {
      handleDataFetch();
    });
  }

  return (
    <div>
      <Table
        dataSource={list}
        onRowDelete={handleRowDelete}
        onRowAdd={handleRowAdd}
        onInputChange={handleInputChange}
        newRecord={newRecord}
      />
    </div>
  );
}
