import Button from '@components/Button';
import TextField from '@components/TextField';
import { joinBoard } from '@services/boardsDatabase';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as storage from '@services/storage';

// TODO: tratamento para lidar com usuários
// Registrar os usuários que entram no board um documento (tabela)
// O admin pode remover usuários (para o caso de alguém sair e entrar novamente)
// Dessa forma não precisa tratar quando alguém sai da página (pelo menos por enquanto)

const NewBoard: NextPage = () => {
  const router = useRouter();

  const [boardId, setBoardId] = useState(null);
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const currentUserName = storage.get('userName');

    if (currentUserName) {
      setUserName(currentUserName);
    }
  }, []);

  const handleGoBoard = async () => {
    try {
      setIsLoading(true);
      await joinBoard(boardId, userName);
      router.push(`/board/${boardId}`);
    } catch (err) {
      console.log('🚀 ~ joinBoard ~ err', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeBoardName = el => {
    setBoardId(el.target.value);
  };

  const handleChangeUserName = el => {
    setUserName(el.target.value);
  };

  return (
    <section className="block mx-auto md:max-w-[600px]">
      <div className="flex flex-col gap-4 mx-5 my-6">
        <h2 className="text-2xl text-center mb-3">Entrar em um quadro</h2>
        <TextField type="text" label="ID do quadro" onChange={handleChangeBoardName} />
        <TextField type="text" label="Seu nome" onChange={handleChangeUserName} value={userName} />
      </div>
      <div className="flex justify-center mx-5 mt-5">
        <Button variant="primary" onClick={handleGoBoard} loading={isLoading} fullWidth>
          Entrar
        </Button>
      </div>
    </section>
  );
};

export default NewBoard;
