import React from 'react'
import { ListItem, ItemInfo} from '../style.js'
import { connect } from 'react-redux'

class List extends React.Component {
  
  render (){
      const { list } = this.props;
      return <div>
        {
          list.map((item)=>{
            return <ListItem key={item.id}>
                      <img className="pic" src={ item.imgUrl } alt=""/>
                      <ItemInfo>
                        <div>
                          <p className="title">{item.title}</p>
                          <p className="info">{item.desc}</p>
                        </div>
                      </ItemInfo>
                  </ListItem>
          })
        }
        
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
    list : state.home.homeList
  }
}


export default connect(mapState,null)(List);