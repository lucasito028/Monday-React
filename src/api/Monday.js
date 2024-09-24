import mondaySdk from "monday-sdk-js";

class Monday{

    monday = mondaySdk().setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQwOTI2MTMzMSwiYWFpIjoxMSwidWlkIjo2NTk5NzAxMCwiaWFkIjoiMjAyNC0wOS0xMVQxMjo1NTozMS42OTlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU0MDU1NjYsInJnbiI6InVzZTEifQ.3BSo6yS7FCGzD2BcVYbs6gdfUCZtdfJquaSDUydpYgc');
    
    async excecute(query) {
        console.log(query) 
        console.log(this.monday) 
        //this.monday.api(query)
    }
    prepare() {
    }
}