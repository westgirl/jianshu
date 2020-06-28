import React from 'react';
import { withRouter } from 'react-router-dom'

class Detail extends React.Component{
    render(){
        return <div>Detail

            <div onClick={ this.back.bind(this) }>返回</div>
        </div>
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
    }
    back(){
        this.props.history.go(-1)
    }
}


export default withRouter(Detail);