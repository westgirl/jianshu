import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    overflow:hidden;
    margin:0 auto;
`
export const HomeLeft = styled.div`
   float:left;
   width:640px;
`
export const HomeRight = styled.div`
   float:left;
   width:280px;
   margin-left:15px;
`
export const ListItem = styled.div`
   overflow:hidden;
   width:625px;
   padding-top: 15px;
   padding-bottom: 20px;
   border-bottom: 1px solid #f0f0f0;
   .title{
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color:#000;
   }
   .pic{
      float:right;
      display:inline-block;
      width:150px;
      height:100px;
   }
`
export const ItemInfo = styled.div`
   float:left;
   width:460px;
   font-size: 13px;
   line-height: 24px;
   color: #999;
`
export const RecommendItem = styled.div`
   margin-top:10px;
   width:280px;
   height:50px;
   background:url(${(props)=>{ return props.imgUrl }}) no-repeat;
   background-size:contain;
`





