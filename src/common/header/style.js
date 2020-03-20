import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderContainer = styled.div`
  border-bottom:1px solid #f0f0f0;
`
export const HeaderWrapper = styled.div`
  height:56px;
  min-width:768px;
  max-width:1440px;
  margin:0 auto;
  
`; 

export const Logo = styled.a.attrs({
  href:'/'
})`
  display:inline-block;
  height:56px;
  width:100px;
  background:url(${logoPic});
  background-size:cover;
`
export const Nav = styled.div`
  display:inline-block;
  width:1000px;
  margin-left:50px;
`
export const NavItem = styled.div`
  height:56px;
  line-height:56px;
  padding:0 15px;
  &.left{
    float:left;
  }
  &.right{
    float:right;
  }
  &.active{
    color: #ea6f5a;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  display:inline-block;
  float:left;
  margin-top:9px;
  width:160px;
  height:38px;
  outline:0;
  border:none;
  border-radius:19px;
  background:#eee;
  padding-left:20px;
  font-size:14px;
  &::placeholder{
    color:red;
  }
`;
export const Attention = styled.div`
  float:right;
  margin-right:120px;
  height:56px;
  line-height:56px;
`
export const Button = styled.div`
  display:inline-block;
  width: 80px;
  height: 38px;
  height:38px;
  line-height:38px;
  margin-right:25px;
  border-radius:20px;
  font-size:15px;
  &.reg{
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
  }
` 