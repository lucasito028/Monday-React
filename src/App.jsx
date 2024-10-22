import { useState, useEffect } from 'react'
import mondaySdk from "monday-sdk-js";
import {MondayCopyTable} from "./assets/style";

function App() {

  const monday = mondaySdk();
  const [result, setResult] = useState([]);
  
  const create = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNjYzMjkzMiwiYWFpIjoxMSwidWlkIjo2NjQzMDk4MywiaWFkIjoiMjAyNC0xMC0yMlQxMzoxMDo0My4wMjlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU1ODg4ODYsInJnbiI6InVzZTEifQ.zgqlFO3h4I-Oaos8md9cJdiPefQx5tcJKda_QFMW0kw');
    monday.api(`
      mutation CreateNewItem{
        create_item (board_id: 7478168789, item_name: "Cenoura") {
          id
        }
      }
       `).then(res => {
           alert(res.data.create_item.id)
       });
  }

  const update = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNjYzMjkzMiwiYWFpIjoxMSwidWlkIjo2NjQzMDk4MywiaWFkIjoiMjAyNC0xMC0yMlQxMzoxMDo0My4wMjlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU1ODg4ODYsInJnbiI6InVzZTEifQ.zgqlFO3h4I-Oaos8md9cJdiPefQx5tcJKda_QFMW0kw');
    monday.api(`
      mutation UpdateColumnValue{
      change_simple_column_value 
      (board_id: 7478168789, 
        item_id: 7627339961,
        column_id:"name"
        value: "Carne") {
        id
      }
    }
       `).then(res => {
           alert(res.data.change_simple_column_value.id)
       });
  }

  useEffect(() => {
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQyNjYzMjkzMiwiYWFpIjoxMSwidWlkIjo2NjQzMDk4MywiaWFkIjoiMjAyNC0xMC0yMlQxMzoxMDo0My4wMjlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU1ODg4ODYsInJnbiI6InVzZTEifQ.zgqlFO3h4I-Oaos8md9cJdiPefQx5tcJKda_QFMW0kw');
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
       });
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

      {result.map((board) => {
        const groupedItems = groupItemsByTitle(board.items_page.items);
        return (
          <div key={board.id}>
            <h1>Borda: {board.name}</h1>
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