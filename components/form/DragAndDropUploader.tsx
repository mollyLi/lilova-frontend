import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const MAX_FILES = 8;

interface DragAndDropUploaderProps {
  onFilesUploaded: (files: File[]) => void; // Callback for parent component to get the uploaded files
}

const DragAndDropUploader: React.FC<DragAndDropUploaderProps> = ({ onFilesUploaded }) => {
  const [previewFiles, setPreviewFiles] = useState<File[]>([]);

  // Handle dropped files
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > MAX_FILES) {
      alert(`最多只能上傳 ${MAX_FILES} 張圖片。`);
      return; // Exit if the limit is reached
    }

    // Update state with the dropped files
    setPreviewFiles(acceptedFiles);

    // Pass the files to the parent component
    onFilesUploaded(acceptedFiles);
  }, [onFilesUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.heic'], // Accept only image files
    },
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #888',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: isDragActive ? '#e0e0e0' : '#fafafa',
      }}
    >
      <h3>商品圖片</h3>
      <input name='images' {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the images here ...</p>
      ) : (
        <p>Drag & drop some images here, or click to select files</p>
      )}

      {/* Preview the selected images */}
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {previewFiles.map((file, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropUploader;
