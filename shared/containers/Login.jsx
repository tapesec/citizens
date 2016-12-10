import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FormLogin from '../components/FormLogin';
import { signUp } from '../../client/actions/user';
import { User } from '../../client/selectors/';

class Login extends React.Component {

    render() {
        let { signUp } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <FormLogin signUp={ signUp } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogIn: User.isLogIn(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: bindActionCreators(signUp, dispatch)
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Login);
