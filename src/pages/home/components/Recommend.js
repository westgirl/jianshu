import React from 'react'
import { RecommendItem  } from '../style'
import { connect } from 'react-redux'

class Recommend extends React.Component {
  render (){
      return <div>
                {
                  this.props.recommenList.map((item)=>{
                    return <RecommendItem key={item.id} imgUrl={ item.imgUrl }></RecommendItem>
                  })
                }
             </div>
  }
}

const mapState = (state)=>{
  return {
      recommenList :state.home.recommenList
  }
}
export default connect(mapState,null)(Recommend);