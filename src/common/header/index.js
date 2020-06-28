import React ,{ Component  } from 'react';
import { HeaderContainer ,HeaderWrapper ,Logo,Nav,NavItem ,SearchWrapper,NavSearch,Attention,
    Button,SearchInfo,SearchInfoItem,SearchTitle,SearchSwitch,SearchList} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getList ,changePage,mouseEnter,mouseLeave } from './store/actionCreator';

class Header extends Component {
    
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
        const { list ,page ,totalPage ,mouseIn,handleChangePage,mouseEnter,mouseLeave } = this.props
        let pageList = []
        if(list.length){
            for (let i = (page-1)*10; i < page*10; i++) {
                pageList.push(
                    <SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>
                )
            }
        }
        
        if(this.props.focused || mouseIn){ 
            return (
                <SearchInfo onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave } >
                    <SearchTitle>热门搜索
                        <SearchSwitch onClick={ ()=>{ handleChangePage(page,totalPage) } }>换一批</SearchSwitch>
                    </SearchTitle>
                    <SearchList>
                    { pageList }
                    </SearchList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
}



const mapStateToProps = (state)=>{
        return {
            focused:state.get('header').get('focused'),
            list:state.get('header').get('list'),
            page:state.get('header').get('page'),
            totalPage:state.get('header').get('totalPage'),
            mouseIn:state.get('header').get('mouseIn')
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
            },
            handleChangePage(page,totalPage){
                if(page >= totalPage){
                    page = 1
                }else{
                    page++
                }
                dispatch(changePage(page))
            },
            mouseEnter(){
                dispatch(mouseEnter())
            },
            mouseLeave(){
                dispatch(mouseLeave())
                
            }
        }
}

export default connect(mapStateToProps,mapDispachToProps)(Header);