import React, { useState, useEffect } from 'react';

/**
 * TIPS: antigamente soh era possivel trabalhar com estado no react quando usado
 * dentro de classes, com o React Hooks a opcao toma nova forma, podendo agora
 * tambem ser usado dentro de funcoes.
 */
function App() {
  /**
   * O useEffect() agora serve para sobrepor os antigos ciclos de vida do React
   * em especial o componentDidMount(), componentUpdate() e componentWillUnmount()
   */
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState(['']);

  /**
   * 1˚ Parametro: a funcao que vai ser executada
   * 2˚ Parametro: Quando ela vai ser executada, ou seja um monitoramento
   * Simula o componentUpdate()
   */
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  /**
   * Se ha apenas um paramentro, o useEffect soh eh executado uma unica vez
   * Simula o componentDidMount()
   */
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    /**
     * Quando ha um retorno de uma funcao no useEffect eh tido o efeito equivalente
     * ao do componentWillUnmount() como no exemplo abaixo:
     */
    /*
    return () => {
      document.removeEventListener()
    };

    */
  }, []);

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
