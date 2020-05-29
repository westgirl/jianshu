import axios from 'axios';



export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            console.log(res);
            let action = {
                type:'CHANGE_LIST',
                list:res.data.data
            }
            dispatch(action)
        }).catch(()=>{
            console.log('error');
        })
    }
}

