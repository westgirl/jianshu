import React from 'react';
import { HomeWrapper, HomeLeft,HomeRight,BackTop} from './style';
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
// import axios from 'axios'
import { connect } from 'react-redux'
import { getHomeInfo ,toggleScrolShow } from './store/actionCreators'

class Home extends React.PureComponent{
    render(){
        console.log('home-render');
        
        return <div>
            <HomeWrapper>
                <HomeLeft>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writter></Writter>
                </HomeRight>
                { this.props.scrollShow ? (<BackTop onClick={this.backTop}>回到顶部</BackTop> ): null }
            </HomeWrapper>
        </div>
    }
    
    componentDidMount(){
        console.log('123');
        
        this.props.changeHomeData()
        this.bindEvent()
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.windowScroll)
    }
    backTop(){
        window.scrollTo(0,0)
    }

}

const mapState = (state)=>{
    return {
        // scrollShow:state.get('home').get('scrollShow')
        scrollShow:false
    }
}
const mapDispatch = (dispatch)=>{
    return {
        changeHomeData(){
            dispatch(getHomeInfo())
        },
        windowScroll(){
            // console.log(document.documentElement.scrollTop);
            if(document.documentElement.scrollTop>400){
                dispatch(toggleScrolShow(true))
            }else{
                dispatch(toggleScrolShow(false))
            }
        }
    }
}

export default connect(mapState,mapDispatch)(Home);