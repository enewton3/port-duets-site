import { TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function Input({ sendMessage }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(text);
    setText("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextField
        value={text}
        type="text"
        placeholder="Enter your message and press ENTER"
        autoFocus={true}
        onChange={handleChange}
      />
    </form>
  );
}
