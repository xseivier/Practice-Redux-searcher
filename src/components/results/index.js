import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from './page'

class Results extends Component {

    render() {
       
        const {results} = this.props
        console.log('this.props.history', this.props.history)
        return (
            <div>
                <Page results={results} goTo={(url) => {
            this.props.history.push(url)
        }}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        results: state.results,
    }
}

export default connect(mapStateToProps)(Results)
/* export default withRouter(connect(mapStateToProps)(Results)) */
