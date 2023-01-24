import { useRouter } from 'next/router';
import ConditionalComponent from './ConditionalComponent';
import LinkButton from './LinkButton';

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
        <LinkButton to="/" variant="primary">
          Home
        </LinkButton>
      </ConditionalComponent>
    </header>
  );
};

export default Header;
