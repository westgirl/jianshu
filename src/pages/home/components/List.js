import React from 'react'
import { ListItem, ItemInfo ,LoadMore} from '../style.js'
import { connect } from 'react-redux'
import { getmore } from '../store/actionCreators'
import { withRouter } from 'react-router-dom'

class List extends React.PureComponent {
  // shouldComponentUpdate(nextProps,nextState){
  //   if(JSON.stringify(nextProps.list) === JSON.stringify(this.props.list) ){
  //     console.log('true');
  //     return false
  //   }else{
  //     console.log('false');
  //     return true
  //   }
  // }
  render (){
      const { list ,homePage ,loadMore ,toDetail} = this.props;
      console.log('render');
      
      return <div>
        {
          list.map((item,index)=>{
            return (
              // to={'/detail/'+item.get('id')}
                //  <Link key={item.get('id')} onClick={()=>{toDetail(item)}}>
                    <ListItem key={item.get('id')} onClick={()=>{toDetail(this,item)}}>
                        <img className="pic" src={ item.get('imgUrl') } alt=""/>
                        <ItemInfo>
                          <div>
                            <p className="title">{item.get('title')}</p>
                            <p className="info">{item.get('desc')}</p>
                          </div>
                        </ItemInfo>
                    </ListItem>
                  // </Link>
                  )
          })
        }
         <LoadMore onClick= { () => loadMore(homePage) }>加载更多</LoadMore>
         {/* <ListItem>
            <img className="pic" src="https://upload-images.jianshu.io/upload_images/20572929-0a8678c594c572fe?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
            <ItemInfo>
              <div>
                <p className="title">睡了一觉贬值12万</p>
                <p className="info">
                跟男友相处几年了，感情一直很好，我跟男友去了他家，天黑的时候我想回家，男友非不让走，我说：“那咱俩住宾馆吧。” 他父母一听，忙说，住啥宾馆啊？多...
                </p>
              </div>
            </ItemInfo>
         </ListItem> */}
      </div>
  }
}


const mapState = (state)=>{
      return {
        list : state.get('home').get('homeList'),
        homePage : state.get('home').homePage
      }
}

const mapDispatch = (disPatch)=>{
      return {
        loadMore(homePage){
          console.log('click');
          disPatch(getmore(homePage + 1))
        },
        toDetail(that,item){
          console.log(item);
          that.props.history.push({
            pathname: '/detail/'+item.get('id')
          });
        }
      }
}

export default connect(mapState,mapDispatch)(withRouter(List));