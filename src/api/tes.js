import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQwOTI2MTMzMSwiYWFpIjoxMSwidWlkIjo2NTk5NzAxMCwiaWFkIjoiMjAyNC0wOS0xMVQxMjo1NTozMS42OTlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU0MDU1NjYsInJnbiI6InVzZTEifQ.3BSo6yS7FCGzD2BcVYbs6gdfUCZtdfJquaSDUydpYgc')

const excecute = () => {

}
monday.api(`
            query {
        me {
            name
        }

        # boards(ids: [13542, 68097]) {
        boards(limit: 1) {
            name

            columns {
            title
            id
            type
            }

            groups {
                title
            id
            }

            # Read more about Board type: https://developer.monday.com/api-reference/docs/boards
        }
        }
  `);