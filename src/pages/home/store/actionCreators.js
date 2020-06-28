import axios from 'axios'

export const getHomeInfo = () => {
   return (dispatch)=>{
        axios.get('/api/home.json').then(res=>{
            console.log(res);
            let action = {
                type:'change_home_data',
                data:res.data.data
            }
            dispatch(action)
        })
   }
}
export const getmore = (homePage)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+homePage).then(res=>{
            console.log(res);
            let action = {
                type:'change_home_more_data',
                data:res.data.data
            }
            dispatch(action)
        })
    }
}

export const toggleScrolShow = (flag)=>{
    return (dispatch)=>{
        let action = {
            type : 'change_scroll_show',
            scrollShow : flag
        }
        dispatch(action)
    }
    
}