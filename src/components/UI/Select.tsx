import "../../styles/select.css";

interface selectOption<T extends string | number> {
  value: T;
  label: string;
}

interface selectProps<T extends string | number> {
  options: selectOption<T>[];
  value: T;
  placeholder: string;
  onChange: (value: T) => void;
}

const Select = <T extends string | number>({
  options,
  value,
  onChange,
  placeholder,
}: selectProps<T>) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as T)}>
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}

      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
