import { useState, useEffect } from 'react'
import mondaySdk from "monday-sdk-js";

function App() {

  const monday = mondaySdk();
  const [result, setResult] = useState([]);
  
  const create = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQxOTI5NDgxMCwiYWFpIjoxMSwidWlkIjo2NjkzNjYyNywiaWFkIjoiMjAyNC0xMC0wM1QyMzoxMzo1Ny4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU4MDMzNTQsInJnbiI6InVzZTEifQ.eCp29EaFu911QT1avoSU2Kt1P2ht7U9ON_R1oaLes7I');
    monday.api(`
      mutation CreateNewItem{
        create_item (board_id: 7564143508, item_name: "Calabresa") {
          id
        }
      }
       `).then(res => {
           alert(res.data.create_item.id)
       });
  }

  const update = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQxOTI5NDgxMCwiYWFpIjoxMSwidWlkIjo2NjkzNjYyNywiaWFkIjoiMjAyNC0xMC0wM1QyMzoxMzo1Ny4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU4MDMzNTQsInJnbiI6InVzZTEifQ.eCp29EaFu911QT1avoSU2Kt1P2ht7U9ON_R1oaLes7I');
    monday.api(`
      mutation UpdateColumnValue{
      change_simple_column_value 
      (board_id: 7564143508, 
        item_id: 7628193306,
        column_id:"name"
        value: "Arroz") {
        id
      }
    }
       `).then(res => {
           alert(res.data.create_item.id)
       });
  }

  useEffect(() => {
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQxOTI5NDgxMCwiYWFpIjoxMSwidWlkIjo2NjkzNjYyNywiaWFkIjoiMjAyNC0xMC0wM1QyMzoxMzo1Ny4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU4MDMzNTQsInJnbiI6InVzZTEifQ.eCp29EaFu911QT1avoSU2Kt1P2ht7U9ON_R1oaLes7I');
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
                value  
                text
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
    <>
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
                <table>
                  <thead>
                    <tr>
                      <td>Id</td>
                      <td>Name</td>
                      {groupedItems[groupKey].items.slice(0, 1).map((item) => (
                      <>
                        {item.column_values.map((column, index) => (
                          <td key={index}>{column.id}</td>  
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
                </table>

              </div>
            ))}
          </div>
        );
      })}

    </>
  )
}

export default App;
