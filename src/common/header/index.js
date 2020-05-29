import React ,{ Component  } from 'react';
import { HeaderContainer ,HeaderWrapper ,Logo,Nav,NavItem ,SearchWrapper,NavSearch,Attention,Button,SearchInfo,SearchInfoItem} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getList } from './store/actionCreator';

class Header extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //        focused:false
    //     }
    //     this.searchFocus = this.searchFocus.bind(this)
    //     this.searchBlur = this.searchBlur.bind(this)
    // }
    // searchFocus(){
    //     this.setState({
    //         focused:true
    //     })
    // }
    // searchBlur(){
    //     this.setState({
    //         focused:false
    //     })
    // }
    render(){
        return (
            <HeaderContainer>
                <HeaderWrapper>
                    <Logo ></Logo>
                    <Attention>
                        <Button className="reg">注册</Button>
                        <Button className="wht">
                           <span className="iconfont">&#xe61c;</span>
                            写文章</Button>
                    </Attention>
                    <Nav>
                       <NavItem className="left active">首页</NavItem>
                       <NavItem className="left">下载</NavItem>
                        <SearchWrapper>
                            <CSSTransition
                             in={this.props.focused}
                             timeout={200}
                             classNames="slide"
                           >
                                <NavSearch  className={this.props.focused ? 'left focused' :'left'} 
                                    onFocus = {this.props.searchFocus} 
                                    onBlur = {this.props.searchBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <span className="iconfont searchIcon">&#xe62b;</span>
                            {this.getListArea()}
                        </SearchWrapper>
                       
                       <NavItem className="right">登录</NavItem>
                       <NavItem className="right">Aa</NavItem>
                    </Nav>
                </HeaderWrapper>
            </HeaderContainer>
        )
    }
    getListArea(){
        if(this.props.focused){ 
            return (
                <SearchInfo >
                    {
                        this.props.list.map(item=>{
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })
                    }
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
}



const mapStateToProps = (state)=>{
        return {
            focused:state.header.focused,
            list:state.header.list
        }
}
const mapDispachToProps = (dispatch)=>{
        return {
            searchFocus(){
                const action = {
                    type:'search_focus',
                }
                dispatch(action)
                dispatch(getList())
            },
            searchBlur(){                
                const action = {
                    type:'search_blur',
                }
                dispatch(action)
            }
        }
}

export default connect(mapStateToProps,mapDispachToProps)(Header);