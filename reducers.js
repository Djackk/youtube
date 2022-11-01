const reducers =(state=[],action)=>{
    switch (action.type){
        case "Add_ToDo":
            return{
                ...state,
                status: action.data
            }
        default:
            return state
    }
}
export default reducers;
