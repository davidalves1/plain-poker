import { CircleNotch } from 'phosphor-react';
import ConditionalComponent from './ConditionalComponent';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  children: JSX.Element | string;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const Button = ({ variant, fullWidth, children, disabled, loading, onClick }: ButtonProps) => {
  enum VARIANTS {
    'primary' = 'bg-cyan-900 text-white',
    'secondary' = 'bg-zinc-500 text-white',
    'outline' = 'border border-cyan-900 text-cyan-900 bg-transparent hover:border-opacity-90 hover:bg-slate-100',
  }

  const isFullWidth = fullWidth ? 'w-full' : '';

  const loadingElement = <CircleNotch className="animate-spin" size={24} />;

  return (
    <button
      className={`px-3 py-2 rounded hover:bg-opacity-90 transition duration-300 text-center disabled:bg-slate-300 disabled:text-white disabled:border-none ${VARIANTS[variant]} ${isFullWidth}`}
      disabled={disabled}
      onClick={onClick}
    >
      <ConditionalComponent condition={!loading} fallback={loadingElement}>
        <>{children}</>
      </ConditionalComponent>
    </button>
  );
};

export default Button;
