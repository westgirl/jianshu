
const defaultState = {
    homeList : [
       
    ],
    recommenList : [
        
    ]
}

export default (state = defaultState,action)=>{
    let newState = JSON.parse(JSON.stringify(state)) 
    newState.homeList = state.homeList
    if(action.type === 'change_home_data'){
        newState.homeList = action.data.homeList
        newState.recommenList = action.data.recommenList
    }
    return newState   
} 
