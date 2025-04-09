type CommonInputProps = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  placeholder?: string;
  type?: string;
  id: string;
  required?: boolean;
};

type TextAreaInputProps = {
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

type Props = CommonInputProps & TextAreaInputProps;
function Text({
  value,
  placeholder = "",
  onChange,
  label,
  type = "text",
  id,
  rows,
  required = false,
}: Props) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {!rows || rows <= 1 ? (
        <input
          className="outline-none border-b border-b-dark-gray  py-2 px-2 w-full text-2xl"
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          name={id}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <textarea
          className="outline-none border-b border-b-dark-gray  py-2 px-2 w-full text-2xl"
          id={id}
          value={value}
          onChange={onChange}
          name={id}
          placeholder={placeholder}
          rows={rows}
          required={required}
        />
      )}
    </div>
  );
}

export default Text;
