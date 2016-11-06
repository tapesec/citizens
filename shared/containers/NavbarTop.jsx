import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import userSelector from '../../client/selectors/user';
import { logOut } from '../../client/actions/user';
import AccountNameLabel from '../components/NavbarTop/AccountNameLabel';

class NavbarTop extends React.Component {


    render() {

        const { accountName, logout } = this.props;
        let accountNameLabel = '';
        if (accountName) {
            accountNameLabel = <AccountNameLabel onClick={ logout } label={ accountName } />;
        }
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <span>Citizens</span>
                        </a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        {accountNameLabel}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        accountName: userSelector.getAccountName(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(logOut, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTop);
