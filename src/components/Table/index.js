import React from "react";
import PropTypes from "prop-types";
import { Textbox } from "../Textbox";
import "./styles.css";

const propTypes = {
  dataSource: PropTypes.array.isRequired,
  onRowDelete: PropTypes.func.isRequired,
  onRowAdd: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  newRecord: PropTypes.object
};

const defaultProps = {
  dataSource: [],
  newRecord: { name: "", surname: "" }
};

export function Table({
  dataSource,
  onRowDelete,
  onRowAdd,
  onInputChange,
  newRecord
}) {
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          <th className="table__column">Nome</th>
          <th className="table__column">Cognome</th>
          <th className="table__column">Operazioni</th>
        </tr>
      </thead>
      <tbody>
        {dataSource.map((e, i) => (
          <tr className="table__row" key={`item-${i}`}>
            <td className="table__column">{e.name}</td>
            <td className="table__column">{e.surname}</td>
            <td className="table__column">
              <button onClick={onRowDelete} value={e._id}>
                Elimina
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="table__row">
          <td className="table__column">
            <Textbox
              name="name"
              value={newRecord.name}
              onChange={onInputChange}
            />
          </td>
          <td className="table__column">
            <Textbox
              name="surname"
              value={newRecord.surname}
              onChange={onInputChange}
            />
          </td>
          <td className="table__column">
            <button onClick={onRowAdd}>Aggiungi</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
