import mondaySdk from "monday-sdk-js";

export default class Monday{
    monday = mondaySdk();
    async excecute() {
        let result
        this.monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQxOTI5NDgxMCwiYWFpIjoxMSwidWlkIjo2NjkzNjYyNywiaWFkIjoiMjAyNC0xMC0wM1QyMzoxMzo1Ny4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU4MDMzNTQsInJnbiI6InVzZTEifQ.eCp29EaFu911QT1avoSU2Kt1P2ht7U9ON_R1oaLes7I');
        this.monday.api(`
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
                console.log(res)
                result = res;
            }
            
        );
        return result;
        }
}