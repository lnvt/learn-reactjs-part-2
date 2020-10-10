import React, { Component } from 'react';
import {Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
class AlertInfo extends Component {
    handleDismiss  = () => {
        this.props.alertOff();
    }
    render() {
        if(this.props.alertShowInfo === false){
            return null
        }
        return (
            <div>
                <AlertContainer position="bottom-right">
                    <Alert type={this.props.AlertType} onDismiss={() => {this.handleDismiss()}   } timeout={1000}>
                        {this.props.alertContent}
                    </Alert>
                </AlertContainer>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertShowInfo: state.alertShow,
        alertContent: state.AlertContent,
        AlertType: state.AlertType
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
                type:"ALERT_OFF"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)