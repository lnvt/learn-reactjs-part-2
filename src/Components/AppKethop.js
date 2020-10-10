import React, { Component } from 'react';
import { connect } from 'react-redux';
import New from './New';

class AppKethop extends Component {
    render() {
        return (
            <div className="ml-5">
                {this.props.dulieu}
                <New/>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        dulieu: state.num
    }
}

export default connect(mapStateToProps)(AppKethop);