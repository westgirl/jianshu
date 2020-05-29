const defaultState = {
    focused:false,
    list:[]
}

export default (state = defaultState,action)=>{
    if(action.type === 'search_focus'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        return newState
    }
    if(action.type === 'search_blur'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        return newState
    }
    if(action.type === 'CHANGE_LIST'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.list
        return newState
    }
    
    return state
}