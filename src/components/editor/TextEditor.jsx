import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = ({
  initialText,
  editorHeight,
  handleChange,
  name,
  value,
}) => {
  return (
    <Editor
      initialValue={initialText}
      init={{
        height: editorHeight,
        menubar: false,
        plugins: [
          "advlist autolink lists link image",
          "charmap print preview anchor help",
          "searchreplace visualblocks code",
          "insertdatetime media table paste wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
      }}
      onChange={handleChange}
      value={value}
      textareaName={name}
    />
  );
};

export default TextEditor;
