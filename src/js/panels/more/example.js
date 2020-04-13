import React from 'react';
import {connect} from 'react-redux';

import {goBack} from '../../store/router/actions';
import {setFormData} from "../../store/formData/actions";

import {
    Div,
    Button,
    Checkbox,
    Input,
    FormLayout,
    FormLayoutGroup,
    Panel,
    Group,
    PanelHeader,
    PanelHeaderBack
} from "@vkontakte/vkui";

class HomePanelProfile extends React.Component {

    constructor(props) {
        super(props);

        let defaultInputData = {
            workplace: '',
            workposition: '',

            checkboxPhoto: 0,
            checkboxOnline: 0
        };

        this.state = {
            inputData: props.inputData['example_form'] || defaultInputData
        };

        this.handleInput = (e) => {
            let value = e.currentTarget.value;

            if (e.currentTarget.type === 'checkbox') {
                value = e.currentTarget.checked;
            }

            this.setState({
                inputData: {
                    ...this.state.inputData,
                    [e.currentTarget.name]: value
                }
            })
        };

        this.clearForm = () => {
            this.setState({
                inputData: defaultInputData
            });
        };
    }



    componentWillUnmount() {
        this.props.setFormData('example_form', this.state.inputData);
    }

    render() {
        const {id, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    ДО ЛЕТА
                </PanelHeader>
               
<div id="countdown">
  <div id="tiles"></div>
  <div class="labels">
    <li>Дней</li>
    <li>Часов</li>
    <li>Минут</li>
    <li>Секунд</li>
  </div>
</div>
        

            </Panel>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        inputData: state.formData.forms,
    };
};

const mapDispatchToProps = {
    setFormData,
    goBack
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePanelProfile);