import React, { useState } from 'react';

/**
 * TIPS: antigamente soh era possivel trabalhar com estado no react quando usado
 * dentro de classes, com o React Hooks a opcao toma nova forma, podendo agora
 * tambem ser usado dentro de funcoes.
 */
function App() {
  /**
   * Quando usado o useState(), ele retorna dois argumentos, um relativo ao estado
   * e uma funcao para fazer a modificacao desse estado.
   */
  const [tech, setTech] = useState(['React JS', 'React Native']);
  const [newTech, setNewTech] = useState(['']);

  function handleAdd() {
    setTech([...tech, newTech]); // Pega os estado de tech no primeiro argumento e adiciona o novo estado no segundo argumento
    setNewTech(''); // Limpa o estado para deixar o input vazio
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
