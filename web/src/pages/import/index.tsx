import Head from 'next/head';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { useDropzone } from 'react-dropzone';
import styles from './styles.module.scss';
import { useTransactions } from '../../contexts/TransactionsContext';

export default function Import() {
  const { importTransactions } = useTransactions();
  const [isLoading, setIsLoading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    accept: '.csv',
    multiple: false,
  });

  const [file, setFile] = useState<File>();

  function onDropAccepted(files: File[]) {
    setFile(files[0]);
  }

  async function handleImportFile() {
    setIsLoading(true);
    importTransactions(file).finally(() => setIsLoading(false));
  }

  return (
    <>
      <Head>
        <title>Importar | dev.finance</title>
      </Head>

      <div className={styles.import}>
        <h3>Importar uma transação</h3>

        <div className={styles.card}>
          <div
            {...getRootProps({
              className: `${styles.dropzone} ${file ? styles.active : ''}`,
            })}
          >
            <input {...getInputProps()} />
            {file ? (
              <p>{file.name} selecionado</p>
            ) : (
              <p>Selecione ou arraste o arquivo aqui</p>
            )}
          </div>

          <div className={styles.save}>
            <div>
              <img src="/alert.svg" alt="Alert" />
              Permitido apenas arquivos CSV
            </div>

            <Button onClick={handleImportFile} isLoading={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
