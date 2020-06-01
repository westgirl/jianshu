import { CHENGE_PAGE ,MOUSE_ENTER ,MOUSE_LEAVE} from './constant';

const defaultState = {
    focused:false,
    list:[],
    page:1,
    totalPage:1
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
        // newState.page = Math.ceil(action.list / 10) || 1
        // newState.totalPage = Math.ceil(action.list / 10)||1
        newState.totalPage = action.totalPage
        console.log(newState.page,newState.totalPage);
        return newState
    }
    if(action.type === CHENGE_PAGE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.page = action.page
        return newState
    }
    if(action.type === MOUSE_ENTER){
        let newState = JSON.parse(JSON.stringify(state));
        newState.mouseIn = true
        return newState
    }
    if(action.type === MOUSE_LEAVE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.mouseIn = false
        return newState
    }
    return state
}