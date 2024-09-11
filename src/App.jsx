import React, { useEffect, useState } from 'react';
import mondaySdk from 'monday-sdk-js';

const monday = mondaySdk();

function App() {
  const [boardsData, setBoardsData] = useState(null);

  useEffect(() => {
    // Setando o token de autenticação do Monday.com
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQwOTI2MTMzMSwiYWFpIjoxMSwidWlkIjo2NTk5NzAxMCwiaWFkIjoiMjAyNC0wOS0xMVQxMjo1NTozMS42OTlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU0MDU1NjYsInJnbiI6InVzZTEifQ.3BSo6yS7FCGzD2BcVYbs6gdfUCZtdfJquaSDUydpYgc');

    // Fazendo a query para pegar todos os boards e seus atributos
    monday.api(`
      query {
        boards {
          id
          name
          description
          columns {
            title
            id
            type
          }
          groups {
            title
            id
          }
          items {
            name
            id
            column_values {
              title
              text
            }
          }
        }
      }
    `).then(res => {
      setBoardsData(res.data.boards); // Armazenando os dados dos boards no estado
    }).catch(err => {
      console.error('Erro ao buscar dados do Monday.com:', err);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Boards e seus Atributos</h1>
      {boardsData ? (
        <div>
          {boardsData.map(board => (
            <div key={board.id}>
              <h2>Board: {board.name} (ID: {board.id})</h2>
              <p>{board.description}</p>

              <h3>Colunas:</h3>
              <ul>
                {board.columns.map(column => (
                  <li key={column.id}>
                    {column.title} (ID: {column.id}, Tipo: {column.type})
                  </li>
                ))}
              </ul>

              <h3>Grupos:</h3>
              <ul>
                {board.groups.map(group => (
                  <li key={group.id}>
                    {group.title} (ID: {group.id})
                  </li>
                ))}
              </ul>

              <h3>Tarefas (Itens):</h3>
              <ul>
                {board.items.map(item => (
                  <li key={item.id}>
                    <h4>{item.name} (ID: {item.id})</h4>
                    <ul>
                      {item.column_values.map(value => (
                        <li key={value.title}>
                          {value.title}: {value.text}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default App;
