import React from 'react';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    onChangeInputEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeInputPassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmitForm(event) {
        event.preventDefault();
        this.props.signUp(this.state);
    }

    render() {


        return (
            <form
                onSubmit={this.onSubmitForm.bind(this)}
                className="col-md-10 col-md-offset-1"
                >
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={this.onChangeInputEmail.bind(this)}
                        value={this.state.email}
                        className="form-control"
                        type="text"
                        id="email"
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        onChange={this.onChangeInputPassword.bind(this)}
                        value={this.state.password}
                        className="form-control"
                        type="password"
                        id="password"
                        />
                </div>
                <button type="submit" className="btn btn-default">Valider</button>
            </form>
        );
    }
}
export default Login;
