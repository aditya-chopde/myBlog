import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

function RichTextEditor({ onChange }) {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <ReactQuill 
      value={content}
      onChange={handleChange}
      placeholder="Write your post here..."
      modules={RichTextEditor.modules}
      formats={RichTextEditor.formats}
      className='h-[500px]'
    />
  );
}

// Custom modules and formats to include in the editor
RichTextEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link'],
    ['clean']                                         
  ],
  clipboard: {
    matchVisual: false,
  }
};

RichTextEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default RichTextEditor;
