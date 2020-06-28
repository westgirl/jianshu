import { fromJS } from 'immutable'

const defaultState = fromJS({
    homeList : [],
    recommenList : [],
    homePage:1,
    scrollShow:false
})

export default (state = defaultState,action)=>{
    // let newState = JSON.parse(JSON.stringify(state)) 
    // newState.homeList = state.homeList
    // if(action.type === 'change_home_data'){
    //     if(JSON.stringify(newState.homeList) !== JSON.stringify(action.data.homeList) ){
    //         newState.homeList = action.data.homeList
    //     }
    //     newState.homeList = action.data.homeList
    //     newState.recommenList = action.data.recommenList
        
    // }
    // if(action.type === 'change_home_more_data'){
        
    //     newState.homeList = newState.homeList.concat(action.data.homeList)
    //     newState.homePage = newState.homePage + 1 
    // }
    // if(action.type === 'change_scroll_show'){
    //     newState.scrollShow = action.scrollShow
    //     console.log(newState.scrollShow);
        
    // }
    // return newState   


    if(action.type === 'change_home_data'){
        // return state.set('homeList',fromJS(action.data.homeList))
        // state.set('recommenList',fromJS(action.data.recommenList))
        console.log(fromJS(action.data.homeList));
        return state.merge({
            homeList:fromJS(action.data.homeList),
            recommenList:fromJS(action.data.recommenList)
        })
    }
    if(action.type === 'change_scroll_show'){
        return state.set('scrollShow',fromJS(action.scrollShow))
    }
    if(action.type === 'change_home_more_data'){
        // newState.homeList = newState.homeList.concat(action.data.homeList)
        // newState.homePage = newState.homePage + 1 
        console.log(state.get('homeList').concat(action.data.homeList));
        
        return state.merge({
            homeList:state.get('homeList').concat(fromJS(action.data.homeList)),
            homePage:state.homePage + 1 
        })
    }
    return state




} 
