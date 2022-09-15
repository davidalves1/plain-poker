import Link from 'next/link';
import { useRouter } from 'next/router';
import ConditionalComponent from './ConditionalComponent';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  const shouldShowHomeLink = router.route !== '/';

  return (
    <header className="flex justify-between items-center px-5 h-16 bg-sky-800 mb-3">
      <p className="text-3xl text-white">{title}</p>
      <ConditionalComponent condition={shouldShowHomeLink}>
        <Link href="/">
          <a className="bg-cyan-900 rounded text-white px-3 py-2 hover:bg-opacity-70 transition duration-300">Home</a>
        </Link>
      </ConditionalComponent>
    </header>
  );
};

export default Header;
