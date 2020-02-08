import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.any,
  dataSource: PropTypes.array.isRequired
};

const defaultProps = {
  dataSource: []
};

export function Select({ dataSource }) {
  return (
    <select>
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
