import Link from 'next/link';
import { CircleNotch } from 'phosphor-react';
import ConditionalComponent from './ConditionalComponent';

interface LinkButtonProps {
  to: string;
  variant: 'primary' | 'secondary' | 'outline';
  children: JSX.Element | string;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const LinkButton = ({ to, variant, fullWidth, disabled, children, loading }: LinkButtonProps) => {
  enum VARIANTS {
    'primary' = 'bg-cyan-900 text-white',
    'secondary' = 'bg-zinc-500 text-white',
    'outline' = 'border border-cyan-900 text-cyan-900 bg-transparent hover:bg-slate-100 hover:border-opacity-90',
    'disabled' = 'bg-slate-300 text-white',
  }

  const isFullWidth = fullWidth ? 'w-full' : '';
  const currentVariant = disabled ? 'disabled' : variant;

  const loadingElement = <CircleNotch className="animate-spin" size={24} />;

  return (
    <Link href={to}>
      <a
        style={{ pointerEvents: disabled ? 'none' : 'auto' }}
        className={`flex justify-center align-center px-3 py-2 rounded hover:bg-opacity-90 transition duration-300 text-center ${VARIANTS[currentVariant]} ${isFullWidth}`}
      >
        <ConditionalComponent condition={!loading} fallback={loadingElement}>
          <>{children}</>
        </ConditionalComponent>
      </a>
    </Link>
  );
};

export default LinkButton;
