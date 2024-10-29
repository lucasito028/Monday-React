import { useState, useEffect } from 'react'
import mondaySdk from "monday-sdk-js";
import {MondayCopyTable} from "./assets/style";

function App() {

  const monday = mondaySdk();
  const [result, setResult] = useState([]);

  const [formValues, setFormValues] = useState([]);
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();

  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  const [state6, setState6] = useState(false);
  const [state7, setState7] = useState(false);

  const create = async (e) => {
    e.preventDefault();
    //monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyODY2MDAzMywiYWFpIjoxMSwidWlkIjo2NzgzOTk0NywiaWFkIjoiMjAyNC0xMC0yN1QxODozODowMC43MjhaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.Bbr98ZFGZMF2Q6AnuXnWMCxpYA08kBF4l8ECMLBOb7A');
    const boardId = parseInt(value1, 10); // Converte value1 para inteiro
    const itemName = JSON.stringify(value2); // Converte value2 para string com aspas duplas

    monday.api(`
      mutation CreateNewItem {
        create_item (board_id: ${boardId}, item_name: ${itemName}) {
          id
        }
      }
       `).then(res => {
          console.log(res)
           alert(res.data.create_item.id)
       });
  }

  const update = (e) => {
    e.preventDefault();
    //monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyODY2MDAzMywiYWFpIjoxMSwidWlkIjo2NzgzOTk0NywiaWFkIjoiMjAyNC0xMC0yN1QxODozODowMC43MjhaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.Bbr98ZFGZMF2Q6AnuXnWMCxpYA08kBF4l8ECMLBOb7A');
    const boardId = parseInt(value1, 10);    // Converte value1 para inteiro
    const itemId = parseInt(value2, 10);     // Converte value2 para inteiro
    const columnValue = JSON.stringify(value3); // Converte value3 para string

    monday.api(`
      mutation UpdateColumnValue {
        change_simple_column_value(
          board_id: ${boardId}, 
          item_id: ${itemId},
          column_id: "name",
          value: ${columnValue}
        ) {
          id
        }
      }
       `).then(res => {
           alert(res.data.change_simple_column_value.id)
       });
  }

  const createGroup = (e) => {
    e.preventDefault();
    const boardId = parseInt(value1, 10); // Converte value1 para inteiro
    const groupName = JSON.stringify(value2); // Converte value2 para string
    //monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyODY2MDAzMywiYWFpIjoxMSwidWlkIjo2NzgzOTk0NywiaWFkIjoiMjAyNC0xMC0yN1QxODozODowMC43MjhaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.Bbr98ZFGZMF2Q6AnuXnWMCxpYA08kBF4l8ECMLBOb7A');
    monday.api(`
      mutation CreateNewItem {
        create_group(board_id: ${boardId},
          group_name: ${groupName}) {
          id
        }
      }
    `).then(res => {
        console.log(res)
        alert(res.data.create_group.id);
    });
}

  const deleteGroup = (e) => {
      e.preventDefault();
      const boardId = parseInt(value1, 10); // Converte value1 para inteiro
      const groupId = JSON.stringify(value2); // Converte value2 para string
      //monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
      monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyODY2MDAzMywiYWFpIjoxMSwidWlkIjo2NzgzOTk0NywiaWFkIjoiMjAyNC0xMC0yN1QxODozODowMC43MjhaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.Bbr98ZFGZMF2Q6AnuXnWMCxpYA08kBF4l8ECMLBOb7A');
      monday.api(`
        mutation deleteGroup {
          delete_group(board_id: ${boardId}, group_id: ${groupId}) {
            id
          }
        }
      `).then(res => {
          alert(res.data.delete_group.id);
      });
  }

  const updateGroup = (e) => {
      e.preventDefault();
      const boardId = parseInt(value1, 10);
      const groupId = JSON.stringify(value2);
      const newTitle = JSON.stringify(value3);
      //monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
      monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyODY2MDAzMywiYWFpIjoxMSwidWlkIjo2NzgzOTk0NywiaWFkIjoiMjAyNC0xMC0yN1QxODozODowMC43MjhaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.Bbr98ZFGZMF2Q6AnuXnWMCxpYA08kBF4l8ECMLBOb7A');
      monday.api(`
        mutation updateGroup{
          update_group(board_id: ${boardId}, group_id: ${groupId}, group_attribute: title, new_value: ${newTitle}){
            id
          }
        }
      `).then(res => {
          alert(res.data.update_group.id);
      });
  }

  const updateBoard = (e) => {
      e.preventDefault();
      const boardId = parseInt(value1, 10);
      const newName = JSON.stringify(value2);
      //monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
      monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyODY2MDAzMywiYWFpIjoxMSwidWlkIjo2NzgzOTk0NywiaWFkIjoiMjAyNC0xMC0yN1QxODozODowMC43MjhaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.Bbr98ZFGZMF2Q6AnuXnWMCxpYA08kBF4l8ECMLBOb7A');
      monday.api(`
        mutation updateBoard {
          update_board(board_id: ${boardId}, board_attribute: name, new_value: ${newName}) 
          
        }
      `).then(res => {
          alert(res.data.update_board.id);
      });
  }

  const deleteBoard = (e) => {
      e.preventDefault();
      const boardId = parseInt(value1, 10);
      //monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
      monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyODY2MDAzMywiYWFpIjoxMSwidWlkIjo2NzgzOTk0NywiaWFkIjoiMjAyNC0xMC0yN1QxODozODowMC43MjhaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.Bbr98ZFGZMF2Q6AnuXnWMCxpYA08kBF4l8ECMLBOb7A');
      monday.api(`
        mutation deleteBoard {
          delete_board(board_id: ${boardId}) {
            id
          }
        }
      `).then(res => {
          alert(res.data.delete_board.id);
      });
  }

  const createBoard = (e) => {
      e.preventDefault();
      const boardName = JSON.stringify(value1);
      //monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
      monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyODY2MDAzMywiYWFpIjoxMSwidWlkIjo2NzgzOTk0NywiaWFkIjoiMjAyNC0xMC0yN1QxODozODowMC43MjhaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.Bbr98ZFGZMF2Q6AnuXnWMCxpYA08kBF4l8ECMLBOb7A');
      monday.api(`
        mutation CreateBoard {
          create_board(board_name: ${boardName}, board_kind: public) {
            id
          }
        }
      `).then(res => {
          alert(res.data.create_board.id);
      });
  }


  const createForm = (e) => {
    e.preventDefault();
    setState(true);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(false);
    setValue1();
    setValue2();
    setValue3();
    setValue4();
  }

  const updateForm = (e) => {
    e.preventDefault();
    setState(false);
    setState1(true);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(false);
    setValue1();
    setValue2();
    setValue3();
    setValue4();
  }

  const createGroupForm = (e) => {
    e.preventDefault();
    setState(false);
    setState1(false);
    setState2(true);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(false);
    setValue1();
    setValue2();
    setValue3();
    setValue4();
  }

  const deleteGroupForm = (e) => {
    e.preventDefault();
    setState(false);
    setState1(false);
    setState2(false);
    setState3(true);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(false);
    setValue1();
    setValue2();
    setValue3();
    setValue4();
  }

  const updateGroupForm = (e) => {
    e.preventDefault();
    setState(false);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(true);
    setState5(false);
    setState6(false);
    setState7(false);
    setValue1();
    setValue2();
    setValue3();
    setValue4();
  }

  const updateBoardForm = (e) => {
    e.preventDefault();
    setState(false);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(true);
    setState7(false);
    setValue1();
    setValue2();
    setValue3();
    setValue4();
  }

  const deleteBoardForm = (e) => {
    e.preventDefault();
    setState(false);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(true);
    setState6(false);
    setState7(false);
    setValue1();
    setValue2();
    setValue3();
    setValue4();
  }

  const createBoardForm = (e) => {
    e.preventDefault();
    setState(false);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(true);
    setValue1();
    setValue2();
    setValue3();
    setValue4();
  }

  useEffect(() => {
    //monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyODY2MDAzMywiYWFpIjoxMSwidWlkIjo2NzgzOTk0NywiaWFkIjoiMjAyNC0xMC0yN1QxODozODowMC43MjhaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.Bbr98ZFGZMF2Q6AnuXnWMCxpYA08kBF4l8ECMLBOb7A');
    monday.api(`
      query GetBoardItems{  
        boards {  
          id
          name
          items_page {  
            items {  
              id  
              name  
              column_values {  
                id  
                type
                value  
                text
                column{
                  title
                  description
                }
              }  
              group{
                id
                title
              }
            }  
          }  
        }  
      }
       `).then(res => {
           setResult(res.data.boards);
           console.log(res.data.boards);
       }).catch((err) => {
        console.log(err)}
       );
  }, []); 

  const groupItemsByTitle = (items) => {
    const groupedItems = {};
    let groupId;
    
    items.forEach(item => {
      groupId = item.group.id;

      if (!groupedItems[groupId]) {
        groupedItems[groupId] = {
          id: groupId,
          title: item.group.title,
          items: []
        };
      }
      
      groupedItems[groupId].items.push(item);
    });

    return groupedItems;
  }

  return (
    <main>
      <button onClick={(e) => createForm(e)}>Criar Algo</button>
      <button onClick={(e) => updateForm(e)}>Alterar algo</button>

      <button onClick={(e) => createGroupForm(e)}>Criar Grupo</button>
      <button onClick={(e) => deleteGroupForm(e)}>Deletar Grupo</button>
      <button onClick={(e) => updateGroupForm(e)}>Alterar Grupo</button>

      <button onClick={(e) => deleteBoardForm(e)}>Deletar Board</button>
      <button onClick={(e) => updateBoardForm(e)}>Alterar Board</button>
      <button onClick={(e) => createBoardForm(e)}>Criar Board</button>

      <form>
        {state && (
          <div>
            <h2>Criar Item</h2>
            <h4>Id do Board</h4>
            <input
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />
            <h4>Valor do Item</h4>
            <input
              type="text"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
            />
            <button onClick={(e) => create(e)}>Fazer</button>
          </div>
        )}
        {state1 && (
          <div>
            <h2>Update Item</h2>
            <h4>Id do Board</h4>
            <input
              type="text"
              onChange={(e) => setValue1(e.target.value)}
            />
            <h4>Id do Item</h4>
            <input
              type="text"
              onChange={(e) => setValue2(e.target.value)}
            />
            <h4>Novo valor do Item</h4>
            <input
              type="text"
              onChange={(e) => setValue3(e.target.value)}
            />
            <button onClick={(e) => update(e)}>Fazer</button>
          </div>
        )}
        {state2 && (
          <div>
            <h2>Criar Tabela</h2>
            <h4>Id do Board</h4>
            <input
              type="text"
              onChange={(e) => setValue1(e.target.value)}
            />
            <h4>Valor da Tabela</h4>
            <input
              type="text"
              onChange={(e) => setValue2(e.target.value)}
            />
            <button onClick={(e) => createGroup(e)}>Fazer</button>
          </div>
        )}
        {state3 && (
          <div>
            <h2>Delete Tabela</h2>
            <h4>Id do Board</h4>
            <input
              type="text"
              onChange={(e) => setValue1(e.target.value)}
            />
            <h4>Id da Tabela</h4>
            <input
              type="text"
              onChange={(e) => setValue2(e.target.value)}
            />
            <button onClick={(e) => deleteGroup(e)}>Fazer</button>
          </div>
        )}
        {state4 && (
          <div>
            <h2>Update Tabela</h2>
            <h4>Id do Board</h4>
            <input
              type="text"
              onChange={(e) => setValue1(e.target.value)}
            />
            <h4>Id da Tabela</h4>
            <input
              type="text"
              onChange={(e) => setValue2(e.target.value)}
            />
            <h4>Valor da Tabela</h4>
            <input
              type="text"
              onChange={(e) => setValue3(e.target.value)}
            />
            <button onClick={(e) => updateGroup(e)}>Fazer</button>
          </div>
        )}
        {state5 && (
          <div>
            <h2>Deletar Board</h2>
            <h4>Id do Board</h4>
            <input
              type="text"
              onChange={(e) => setValue1(e.target.value)}
            />
            <button onClick={(e) => deleteBoard(e)}>Fazer</button>
          </div>
        )}
        {state6 && (
          <div>
            <h2>Updatear Board</h2>
            <h4>Id do Board</h4>
            <input
              type="text"
              onChange={(e) => setValue1(e.target.value)}
            />
            <h4>Novo Valor do Board</h4>
            <input
              type="text"
              onChange={(e) => setValue2(e.target.value)}
            />
            <button onClick={(e) => updateBoard(e)}>Fazer</button>
          </div>
        )}
        {state7 && (
          <div>
            <h2>Criar Board</h2>
            <h4>Nome do Board</h4>
            <input
              type="text"
              onChange={(e) => setValue1(e.target.value)}
            />
            <button onClick={(e) => createBoard(e)}>Fazer</button>
          </div>
        )}

      </form>

      {result.map((board) => {
        const groupedItems = groupItemsByTitle(board.items_page.items);
        //console.log(groupedItems);
        return (
          <div key={board.id}>
            <h1>Borda: {board.name}</h1>
            <h1>Bord Id: {board.id}</h1>
            {Object.keys(groupedItems).map((groupKey) => (
              <div key={groupKey}>
                <h2>Tabela: {groupedItems[groupKey].title}</h2>
                <h2>Tabela id: {groupedItems[groupKey].id}</h2>
                <MondayCopyTable>
                  <thead>
                    <tr>
                      <td>Id</td>
                      <td>Name</td>
                      {groupedItems[groupKey].items.slice(0, 1).map((item) => (
                      <>
                        {item.column_values.map((column, index) => (
                          <td key={index}>{column.column.title}</td>  
                        ))}
                      </>
                    ))}
                    </tr>
                  </thead>
                  <tbody> 
                  {groupedItems[groupKey].items.length > 0 ? (
                    groupedItems[groupKey].items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        {item.column_values.map((column, index) => (
                          <td key={index}>{column.text}</td>  
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">Não há itens na tabela.</td>
                    </tr>
                  )}
                  </tbody>
                </MondayCopyTable>

              </div>
            ))}
          </div>
        );
      })}

    </main>
  )
}

export default App;