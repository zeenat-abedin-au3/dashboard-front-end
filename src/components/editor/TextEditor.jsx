import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = ({
  initialText,
  editorHeight,
  handleChange,
  name,
  value,
  short = false,
  inline = false,
}) => {
  let plug;
  let tool;
  if (short) {
    plug = ["code"];
    tool = "bold italic | formatselect";
  } else {
    plug = [
      "advlist autolink lists link image",
      "charmap print preview anchor help",
      "searchreplace visualblocks code",
      "insertdatetime media table paste wordcount",
    ];
    tool =
      "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help";
  }
  return (
    <Editor
      initialValue={initialText}
      init={{
        max_height: editorHeight,
        menubar: false,
        plugins: plug,
        toolbar: tool,
        content_style: "body {font-size: 14px}",
        statusbar: false,
        mobile: {
          theme: "mobile",
          plugins: "autosave lists autolink lists",
          toolbar: "undo bold italic styleselect formatselect",
          max_height: 100,
        },
      }}
      onChange={handleChange}
      value={value}
      textareaName={name}
    />
  );
};

export default TextEditor;
