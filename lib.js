
const calculator = {
    addNumber : (a,b)=>{
        return a+b
    },
    subNumber : (a,b)=>{
        return a-b
    },
    getData : ()=>{

        try {
            const res =  axios.get(`https://api.github.com/users/`)
        
            const todos = res.data;
        
            console.log(`GET: Here's the list of todos`, todos)
        
            return todos
          } catch (e) {
            console.error(e)
          }
    }
}

export default calculator