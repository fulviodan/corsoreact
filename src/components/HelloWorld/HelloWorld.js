import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const propTypes = {
  children: PropTypes.any,
  dataSource: PropTypes.array.isRequired
};

const defaultProps = {
  dataSource: []
};

export function HelloWorld({ children, dataSource }) {
  return (
    <div>
      <div>
        {dataSource.map((e, i) => (
          <div className="item" key={`item-${i}`}>
            {e}
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}

HelloWorld.propTypes = propTypes;
HelloWorld.defaultProps = defaultProps;
