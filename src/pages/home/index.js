import React from 'react';
import { HomeWrapper, HomeLeft,HomeRight} from './style';
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import axios from 'axios'
import { connect } from 'react-redux'

class Home extends React.Component{
    render(){
        return <div>
            <HomeWrapper>
                <HomeLeft>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writter></Writter>
                </HomeRight>
            </HomeWrapper>
        </div>
    }

    componentDidMount(){
        axios.get('/api/home.json').then(res=>{
            console.log(res);
            let action = {
                type:'change_home_data',
                data:res.data.data
            }
            this.props.changeHomeData(action)
        })
    }
}

const mapDispatch = (dispatch)=>{
    return {
        changeHomeData(action){
            dispatch(action)
        }
    }
}

export default connect(null,mapDispatch)(Home);