// src/TodoList.jsx
import React, { useState } from 'react';
import styles from './TodoList.module.css'; // Importe os estilos

const TodoList = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const removerTarefa = (indexParaRemover) => {
    setTarefas(tarefas.filter((_, index) => index !== indexParaRemover));
  };

  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <h1 className={styles.title}>Lista de Tarefas</h1>
      <h3></h3>
      <form className={styles.form} onSubmit={adicionarTarefa}>
        <input
          className={styles.inputField}
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma nova tarefa..."
        />
        <button type="submit" className={styles.addButton}>
          Adicionar
        </button>
      </form>
      <ul className={styles.list}>
        {tarefas.map((tarefa, index) => (
          <li key={index} className={styles.listItem}>
            <span>{tarefa}</span>
            <button
              onClick={() => removerTarefa(index)}
              className={styles.removeButton}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );


};

export default TodoList;