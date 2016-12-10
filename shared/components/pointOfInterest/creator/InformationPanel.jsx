import React, { PropTypes } from 'react';

import './InformationPanel.scss';

export default class InformationPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            visibility: 'PUBLIC'
        };
    }

    inputOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitForm(event) {
        this.props.onSave(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div className="InformationPanel">
                <form onSubmit={this.submitForm.bind(this)}>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="PUBLIC"
                                name="visibility"
                                onChange={this.inputOnChange.bind(this)}
                                checked={this.state.visibility === 'PUBLIC'}/>
                            Public
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="PRIVATE"
                                name="visibility"
                                onChange={this.inputOnChange.bind(this)}
                                checked={this.state.visibility === 'PRIVATE'}
                            />
                            Privé
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Titre*</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Titre"
                            name="title"
                            onChange={this.inputOnChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Message</label>
                        <textarea
                            className="form-control"
                            id="title"
                            rows={6}
                            name="content"
                            onChange={this.inputOnChange.bind(this)}
                        >
                        </textarea>
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Sauvegarder
                    </button>
                </form>
            </div>
        );
    }
}

InformationPanel.propTypes = {
    onSave: PropTypes.func.isRequired
};
