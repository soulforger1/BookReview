import { useEffect, useRef, useState } from "react";

type InputType = {
  label?: string;
  onChange?: (e: any) => void;
  className?: string;
  labelClass?: string;
  textarea?: boolean;
};

type FileInputFile = {
  label?: string;
  onFileSelect?: (e: any) => any;
  className?: string;
  labelClass?: string;
};

export const Input = ({
  label,
  className,
  labelClass,
  onChange,
  textarea = false,
}: InputType) => {
  return (
    <div>
      <p className={`text-2xl mb-3 ${labelClass}`}>{label}</p>
      {textarea ? (
        <textarea
          onChange={onChange}
          className={`${className} border-solid border-2 border-neutral-400 rounded-lg pl-3 w-72 h-10 
          focus:outline-none focus:border-blue-400 
          invalid:border-pink-500 invalid:text-pink-600
        `}
        />
      ) : (
        <input
          onChange={onChange}
          className={`${className} border-solid border-2 border-neutral-400 rounded-lg pl-3 w-72 h-10 
          focus:outline-none focus:border-blue-400 
          invalid:border-pink-500 invalid:text-pink-600
        `}
        />
      )}
    </div>
  );
};

export const FileInput = ({
  label,
  className,
  labelClass,
  onFileSelect,
}: FileInputFile) => {
  const [selectedFile, setSelectedFile] = useState(undefined);
  const inputEl = useRef<any>(null);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (selectedFile && inputEl.current) {
      inputEl.current.style.backgroundImage = `url('${URL.createObjectURL(
        selectedFile
      )}')`;
    }
  }, [selectedFile]);

  return (
    <div
      onClick={() => inputRef.current.click()}
      className="w-96 h-96 border-solid border-2 border-neutral-400 rounded-lg cursor-pointer flex justify-center items-center bg-contain bg-no-repeat bg-center"
      ref={inputEl}
    >
      {!selectedFile && (
        <p className={`text-2xl mb-3 ${labelClass}`}>{label}</p>
      )}
      <input
        onChange={(e: any) => {
          onFileSelect && onFileSelect(e.target.files[0]);
          setSelectedFile(e.target.files[0]);
        }}
        ref={inputRef}
        type="file"
        accept="image/*"
        placeholder="hello"
        className={`hidden ${className}`}
      />
    </div>
  );
};
