import axios from 'axios';
import { CHENGE_PAGE ,MOUSE_ENTER ,MOUSE_LEAVE} from './constant';

export const changePage = (page)=>({
   type:CHENGE_PAGE,
   page
})
export const mouseEnter = ()=>({
    type:MOUSE_ENTER
 })
 export const mouseLeave = ()=>({
    type:MOUSE_LEAVE
 })


export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            let action = {
                type:'CHANGE_LIST',
                list:res.data.data,
                totalPage:Math.ceil(res.data.data.length/10)
            }
            dispatch(action)
        }).catch(()=>{
            console.log('error');
        })
    }
}

