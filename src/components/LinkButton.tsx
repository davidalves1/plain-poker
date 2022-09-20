import Link from 'next/link';

interface LinkButtonProps {
  to: string;
  variant: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: JSX.Element | string;
}

const LinkButton = ({ to, variant, fullWidth, children }: LinkButtonProps) => {
  enum VARIANTS {
    'primary' = 'bg-cyan-900 text-white',
    'secondary' = 'bg-zync-500 text-white',
    'outline' = 'border border-cyan-900 text-cyan-900 bg-transparent hover:text-opacity-90 hover:border-opacity-90',
  }

  const isFullWidth = fullWidth ? 'w-full' : '';

  return (
    <Link href={to}>
      <a
        className={`px-3 py-2 rounded hover:bg-opacity-90 transition duration-300 text-center ${VARIANTS[variant]} ${isFullWidth}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
