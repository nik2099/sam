import { Editor } from "@tinymce/tinymce-react";
import React from "react";
const useTexEditor = (initialValue) => {
  const editorRef = React.useRef(null);
  return (
    <p>
      <Editor
        apiKey="6kyb5kgnbfcxo557ck9xi3wtxaiiqqtn60uwik9vgki8j7tj"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        inline={true}
        init={{
          menubar: false,
        }}
        disabled
      />
    </p>
  );
};
export default useTexEditor;
