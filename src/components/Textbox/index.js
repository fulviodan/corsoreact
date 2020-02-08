import React from "react";

export function Textbox({ value, onChange, name }) {
  return <input name={name} type="text" value={value} onChange={onChange} />;
}
