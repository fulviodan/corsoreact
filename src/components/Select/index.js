import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  dataSource: PropTypes.array.isRequired
};

const defaultProps = {
  dataSource: [],
  value: ""
};

export function Select({ dataSource, onChange, value }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="">.:Seleziona:.</option>
      {dataSource.map((e, i) => (
        <option value={e.value} className="item" key={`item-${i}`}>
          {e.text}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
