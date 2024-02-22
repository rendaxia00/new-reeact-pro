import React, { Component, PropTypes } from 'react';
import Checkbox from '../Checkbox';
import Button from '../Button';


import './Popup.css';

export default class Popup extends Component {
    static propTypes = {
        onCloseClick: PropTypes.func,
        onBtnClick: PropTypes.func,
        content: PropTypes.string
    };

    state = {
        checked: false
    };

    handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        this.setState({ checked })
    };

    render() {
        const { content, onCloseClick, onBtnClick } = this.props;
        const { checked } = this.state;

        return (
            <div className="popup">
                <button
                    className="popup__close"
                    onClick={onCloseClick}
                />
                <h4 className="popup__title">Accept SONM presale terms to continue</h4>
                <div
                    className="popup__content"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                <form action="#" className="popup__form">
                    <div className="popup__checkbox">
                        <Checkbox
                            id="terms"
                            name="terms"
                            value="terms"
                            label="I agree with this terms"
                            handleChange={this.handleCheckboxChange}
                        />
                    </div>
                    <div className="popup__btn">
                        <Button
                            type="submit"
                            text="Show me presale deposit address"
                            disabled={!checked}
                            handleClick={onBtnClick}
                        />
                    </div>
                </form>
            </div>
        )
    }
}