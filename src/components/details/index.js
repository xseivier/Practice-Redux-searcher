import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import Page from './page'
import findCurrentItems from '../../redux/actions/findCurrentItems'

class Details extends Component {

    componentDidMount(){
        this.props.findCurrentItems(parseInt(this.props.match.params.itemId))
    }

    render() {
       
        const {currentItem} = this.props
        console.log('currentItem', currentItem)

        return (
            <div>
                <Page currentItem={currentItem} goTo={(url) => {
            this.props.history.push(url)
        }}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentItem: state.currentItem,
    }
}

const mapDispatchToProps = {
     findCurrentItems
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details))
