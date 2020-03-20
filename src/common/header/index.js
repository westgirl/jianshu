import React ,{ Component  } from 'react';
import { HeaderContainer ,HeaderWrapper ,Logo,Nav,NavItem ,NavSearch,Attention,Button} from './style';

class Header extends Component {
    render(){
        return (
            <HeaderContainer>
                <HeaderWrapper>
                    <Logo ></Logo>
                    
                    <Nav>
                       <NavItem className="left active">首页</NavItem>
                       <NavItem className="left">下载</NavItem>
                       <NavSearch className="left"></NavSearch>
                       
                       <NavItem className="right">登录</NavItem>
                       <NavItem className="right">Aa</NavItem>
                    </Nav>
                    <Attention>
                        <Button className="reg">注册</Button>
                        <Button className="wht">写文章</Button>
                    </Attention>
                </HeaderWrapper>
            </HeaderContainer>
        )
    }
}
export default Header;