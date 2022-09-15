import Link from 'next/link';

interface LinkButtonProps {
  to: string;
  variant: 'primary' | 'secondary' | 'outline';
  children: JSX.Element | string;
}

const LinkButton = ({ to, variant, children }: LinkButtonProps) => {
  enum VARIANTS {
    'primary' = 'bg-cyan-900 text-white',
    'secondary' = 'bg-zync-500 text-white',
    'outline' = 'border border-cyan-900 text-cyan-900 bg-transparent hover:text-opacity-90 hover:border-opacity-90',
  }

  return (
    <Link href={to}>
      <a className={`px-3 py-2 rounded hover:bg-opacity-90 transition duration-300 ${VARIANTS[variant]}`}>{children}</a>
    </Link>
  );
};

export default LinkButton;
