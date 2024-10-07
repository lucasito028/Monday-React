import { useState, useEffect } from 'react'
import mondaySdk from "monday-sdk-js";

function App() {

  const monday = mondaySdk();
  const [boards, setBoards] = useState([]);
  
  const create = (e) => {
    e.preventDefault();
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQxOTI5NDgxMCwiYWFpIjoxMSwidWlkIjo2NjkzNjYyNywiaWFkIjoiMjAyNC0xMC0wM1QyMzoxMzo1Ny4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU4MDMzNTQsInJnbiI6InVzZTEifQ.eCp29EaFu911QT1avoSU2Kt1P2ht7U9ON_R1oaLes7I');
    monday.api(`
      mutation CreateNewItem{
        create_item (board_id: 7564143508, item_name: "New Item") {
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
           //console.log(res)
           setBoards(res.data.boards);
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
      {
        boards.map((board) => {
          const groupedItems = groupItemsByTitle(board.items_page.items);
          return(
            <div key={board.id}>
              <h1>{board.name}</h1>
              {Object.keys(groupedItems).map((groupKey) => (
                <div>
                  <h2>{groupedItems[groupKey].id}</h2>
                  <h2>{groupedItems[groupKey].title}</h2>
                  <pre>{JSON.stringify(groupedItems[groupKey], undefined, 2)}</pre>
                </div>
              ))}
            </div>
            )
        }
      )
        
      }
      <button onClick={(e) => create(e)}>Criar algo</button>
    </>
  )
}

export default App;
