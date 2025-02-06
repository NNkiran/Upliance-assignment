import React, { useState, useRef, useEffect } from "react";
import "./RichTextEditor.css";

const RichTextEditor = () => {

  const [content, setContent] = useState("");
  const [isDirty, setIsDirty] = useState(false); // Track unsaved changes
  const editorRef = useRef(null);

  // Load content from localStorage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem("richTextContent");
    console.log("Saved Content: ", savedContent);
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleContentChange = (e) => {
    setContent(e.target.value);
    setIsDirty(true);
  };

  const saveContent = () => {
    if (editorRef.current) {
      const editorHTML = editorRef.current.innerHTML;
      setContent(editorHTML);
      localStorage.setItem("richTextContent", editorHTML);
      setIsDirty(false);
      alert("Content Saved!");
    }
  };

  // Formatting functions
  const applyFormat = (command) => {
    document.execCommand(command, false, null);
    setIsDirty(true);
  };

  return (
    <div className="rich-text-editor-container">
      <h2>Rich Text Editor</h2>
      
      <div className="editor-buttons">
        <button onClick={() => applyFormat("bold")}>Bold</button>
        <button onClick={() => applyFormat("italic")}>Italic</button>
        <button onClick={() => applyFormat("underline")}>Underline</button>
        <button onClick={() => applyFormat("insertUnorderedList")}>List</button>
      </div>
      
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="editor-wrapper"
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={handleContentChange}
      />
      
      <div className="editor-footer">
        <button onClick={saveContent} disabled={!isDirty}>
          Save
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
