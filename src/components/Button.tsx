interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  children: JSX.Element | string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button = ({ variant, fullWidth, children, onClick }: ButtonProps) => {
  enum VARIANTS {
    'primary' = 'bg-cyan-900 text-white',
    'secondary' = 'bg-zync-500 text-white',
    'outline' = 'border border-cyan-900 text-cyan-900 bg-transparent hover:text-opacity-90 hover:border-opacity-90',
  }

  const isFullWidth = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`px-3 py-2 rounded hover:bg-opacity-90 transition duration-300 text-center ${VARIANTS[variant]} ${isFullWidth}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
