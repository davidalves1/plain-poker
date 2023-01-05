import Button from '@components/Button';
import TextField from '@components/TextField';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { createBoard } from '../services/boardsDatabase';

const NewBoard: NextPage = () => {
  const router = useRouter();

  const [boardName, setBoardName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoBoard = async () => {
    try {
      setIsLoading(true);
      // TODO: move this logic to New Board view
      const boardId = await createBoard(boardName, userName);
      router.push(`/board/${boardId}`);
    } catch (err) {
      console.log('🚀 ~ newBoard ~ err', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeBoardName = el => {
    setBoardName(el.target.value);
  };

  const handleChangeUserName = el => {
    setUserName(el.target.value);
  };

  return (
    <section className="block mx-auto md:max-w-[600px]">
      <div className="flex flex-col gap-4 mx-5 my-6">
        <h2 className="text-2xl text-center mb-3">Criar um quadro novo</h2>
        <TextField type="text" label="Nome do quadro" onChange={handleChangeBoardName} />
        <TextField type="text" label="Seu nome" onChange={handleChangeUserName} />
      </div>
      <div className="flex justify-center mx-5 mt-5">
        <Button variant="primary" onClick={handleGoBoard} loading={isLoading} fullWidth>
          Criar
        </Button>
      </div>
    </section>
  );
};

export default NewBoard;
