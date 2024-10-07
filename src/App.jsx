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
           items_page {  
           items {  
               id  
               name  
               column_values {  
               id  
               value  
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

  return (
    <>
      {/*<pre>{JSON.stringify(boards, undefined, 2)}</pre>*/}
      {
        boards.map((board) => (
          board.items_page.items.map((item) => (
            <pre>{JSON.stringify(item, undefined, 2)}</pre>
          ))
        ))
      }
      <button onClick={(e) => create(e)}>Criar algo</button>
    </>
  )
}

export default App;
