import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
    handleAdd  = (event) => {
        event.preventDefault();
        this.props.changeEditStatus();
        this.props.changeTitleStatus();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                    <a className="navbar-brand" href="!#">FST</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0 float">
                            <li className="nav-item active">
                                <a className="nav-link" href="!#">HOME <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#" onClick={(event) => this.handleAdd(event)}>Thêm ghi chú</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
        },
        changeTitleStatus: () => {
            dispatch({type:"CHANGE_TITLE_STATUS"})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);