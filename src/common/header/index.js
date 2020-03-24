import React ,{ Component  } from 'react';
import { HeaderContainer ,HeaderWrapper ,Logo,Nav,NavItem ,SearchWrapper,NavSearch,Attention,Button} from './style';
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
           focused:false
        }
        this.searchFocus = this.searchFocus.bind(this)
        this.searchBlur = this.searchBlur.bind(this)
    }
    searchFocus(){
        this.setState({
            focused:true
        })
    }
    searchBlur(){
        this.setState({
            focused:false
        })
    }
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
                             in={this.state.focused}
                             timeout={200}
                             classNames="slide"
                           >
                                <NavSearch  className={this.state.focused ? 'left focused' :'left'} 
                                    onFocus = {this.searchFocus} 
                                    onBlur = {this.searchBlur}
                                ></NavSearch>
                       </CSSTransition>
                       <span className="iconfont searchIcon">&#xe62b;</span>
                            </SearchWrapper>
                       
                       <NavItem className="right">登录</NavItem>
                       <NavItem className="right">Aa</NavItem>
                    </Nav>
                </HeaderWrapper>
            </HeaderContainer>
        )
    }
}
export default Header;