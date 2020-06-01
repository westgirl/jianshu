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
  float:left;
  display:inline-block;
  height:56px;
  width:100px;
  background:url(${logoPic});
  background-size:cover;
`
export const Nav = styled.div`
  margin-left:90px;
  margin-right:230px;
  // overflow:hidden;
  padding:0 50px;
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
export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  .searchIcon{
    position:absolute;
    top:18px;
    right:10px;
  }
  .slide-enter{
    transition:all 0.5s ease;
  }
  .slide-enter-active{
    width:320px;
  }
  .slide-exit{
    transition:all 0.5s ease;
  }
  .slide-exit-active{
    width:240px;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  display:inline-block;
  float:left;
  margin-top:9px;
  margin-left:20px;
  width:240px;
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
  &.focused{
    width:320px;
  }
`;
export const Attention = styled.div`
  float:right;
  height:56px;
  line-height:56px;
`
export const Button = styled.div`
  display:inline-block;
  width: 80px;
  height: 32px;
  line-height:32px;
  text-align:center;
  margin-right:25px;
  border-radius:20px;
  font-size:15px;
  &.reg{
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
  }
  &.wht{
    font-size: 14px;
    color: #fff;
    background-color: #ea6f5a;
  }
` 
export const SearchInfo = styled.div`
  position:absolute;
  top:56px;
  left:20px;
  right:0;
  height:140px;
  background:#fff;
  z-index:10;
  border:1px solid #e3e3e3;
  width: 250px;
  border-radius: 4px;
  padding: 15px 20px;
`
export const SearchInfoItem = styled.div`
  display:inline-block;
  float:left;
  margin-right: 15px;
`
export const SearchTitle = styled.div`

`
export const SearchSwitch = styled.div`
   display:inline-block;
   float:right;
`
export const SearchList = styled.div`
   overflow:hidden;
`