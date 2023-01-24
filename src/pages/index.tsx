import LinkButton from '@components/LinkButton';
import type { NextPage } from 'next';
import { FilePlus, SignIn } from 'phosphor-react';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center gap-5 w-11/12 md:w-1/2 mt-8 mx-auto ">
      <LinkButton to="/new-board" variant="primary" fullWidth>
        <div className="flex justify-center items-center gap-3 ">
          <FilePlus size={24} />
          Novo
        </div>
      </LinkButton>
      <LinkButton to="/join-board" variant="primary" fullWidth>
        <div className="flex justify-center items-center gap-3 ">
          <SignIn size={24} />
          Entrar
        </div>
      </LinkButton>
    </div>
  );
};

export default Home;
