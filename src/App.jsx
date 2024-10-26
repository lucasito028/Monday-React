import { useState, useEffect } from 'react'
import mondaySdk from "monday-sdk-js";
import {MondayCopyTable} from "./assets/style";

function App() {

  const monday = mondaySdk();
  const [result, setResult] = useState([]);
  
  const create = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.api(`
      mutation CreateNewItem{
        create_item (board_id: 7709437460, item_name: "Cenoura") {
          id
        }
      }
       `).then(res => {
           alert(res.data.create_item.id)
       });
  }

  const update = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.api(`
      mutation UpdateColumnValue{
      change_simple_column_value 
      (board_id: 7709437460, 
        item_id: 7709437471,
        column_id:"name"
        value: "Cenoura") {
        id
      }
    }
       `).then(res => {
           alert(res.data.change_simple_column_value.id)
       });
  }

  const createGroup = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.api(`
      mutation CreateNewItem{
        create_group(board_id: 7705307859,
          group_name: "Binaldo"){
          id
        }
      }
       `).then(res => {
           alert(res.data.create_group.id)
       });
  }

  const deleteGroup = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.api(`
      mutation deleteGroup{
        delete_group(board_id: 7705307859, group_id:"topics"){
          id
        }
      }
       `).then(res => {
           alert(res.data.deleteGroup.id)
       });
  }

  const updateGroup = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.api(`
      mutation updateGroup{
        update_group(board_id: 7705307859, group_id:"topics", group_attribute: title, new_value: "Cenoura"){
          id
        }
      }
       `).then(res => {
           alert(res.data.update_group.id)
       });
  }

  const updateBoard = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.api(`
      mutation updateBoard{
        update_board(board_id: 7709354958, board_attribute:name, new_value: "Exemplo"){
          id
        }
      }
       `).then(res => {
           alert(res.data.update_board.id)
       });
  }

  const deleteBoard = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.api(`
      mutation deleteBoard{
        delete_board(board_id: 7709345811){
        id}
      }
       `).then(res => {
           alert(res.data.delete_board.id)
       });
  }

  const createBoard = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
    monday.api(`
      mutation CreateBoard{
        create_board(board_name: "Teste2", board_kind: public){
          id
        }
      }
       `).then(res => {
           alert(res.data.create_board.id)
       });
  }

  useEffect(() => {
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNzY5MDY4NiwiYWFpIjoxMSwidWlkIjo2Nzc0NTMzMywiaWFkIjoiMjAyNC0xMC0yNFQxMTo0NzozMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjYxNDkyNTIsInJnbiI6InVzZTEifQ.zhgRaEbrG4Pkbw0Uap6KX8GQM2DAHGaOTAjKeZfTBCA');
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
      <button onClick={(e) => create(e)}>Criar algo</button>
      <button onClick={(e) => update(e)}>Alterar algo</button>

      <button onClick={(e) => createGroup(e)}>Criar Grupo</button>
      <button onClick={(e) => deleteGroup(e)}>Deleta Grupo</button>
      <button onClick={(e) => updateGroup(e)}>Alterar Grupo</button>

      <button onClick={(e) => deleteBoard(e)}>Deletar Board</button>
      <button onClick={(e) => updateBoard(e)}>Alterar Board</button>
      <button onClick={(e) => createBoard(e)}>Criar Board</button>

      {result.map((board) => {
        const groupedItems = groupItemsByTitle(board.items_page.items);
        return (
          <div key={board.id}>
            <h1>Borda: {board.name}</h1>
            <h1>Bord Id: {board.id}</h1>
            {Object.keys(groupedItems).map((groupKey) => (
              <div key={groupKey}>
                <h2>Tabela: {groupedItems[groupKey].title}</h2>
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
                      {groupedItems[groupKey].items.map((item) => (
                          <tr>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                            {item.column_values.map((column) => (
                              <td>{column.text}</td>  
                            ))}
                          </tr>
                        ))}
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