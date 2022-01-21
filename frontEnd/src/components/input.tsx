type InputType = {
  label?: string;
  onChange?: (e: any) => void;
  className?: string;
  labelClass?: string;
};

export const Input = ({
  label,
  className,
  labelClass,
  onChange,
}: InputType) => {
  return (
    <div>
      <p className={`text-2xl mb-3 ${labelClass}`}>{label}</p>
      <input
        onChange={onChange}
        className={`${className} border-solid border-2 border-neutral-400 rounded-lg pl-3 w-72 h-10 
          focus:outline-none focus:border-blue-400 
          invalid:border-pink-500 invalid:text-pink-600
        `}
      />
    </div>
  );
};
