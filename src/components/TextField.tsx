import ConditionalComponent from './ConditionalComponent';

interface TextFieldProps {
  type: 'text' | 'email' | 'tel';
  label?: string;
  value?: string | number;
  onChange?: (el: any) => void;
}

const TextField = ({ label, onChange, type, value }: TextFieldProps) => {
  return (
    <fieldset>
      <ConditionalComponent condition={!!label}>
        <label htmlFor="input">{label}</label>
      </ConditionalComponent>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className="border border-slate-400 focus:border-slate-600 outline-none rounded-md w-full h-10 px-3 py-2"
      />
    </fieldset>
  );
};

export default TextField;
