import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader} from "@vkontakte/vkui"




class HomePanelBase extends React.Component {



    openPopout() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    style: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    action: this.showImg
                }]}
                onClose={() => this.props.closePopout()}
            >
                <h2>Перейти к покупке?</h2>
            </Alert>
        );
    }

    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Сундучок</PanelHeader>
                
                


<Div className="div-center">
                        <img src="https://sun3-10.userapi.com/Wis7EwnrgnJrPfIMKC7xIDXL-KybhljD_RtEpg/UDEg1mIo_GE.jpg" alt="Стикер VK"/>
                    </Div>
                <Div>    

                 <a class="buttons" href='https://my.qiwi.com/Aleksei-KLym5a6TAy?noCache=true' >Открыть Сундучок</a>
<center><text> Правила игры просты, вы открываете сундучок за определенную сумму и если вы выигрываете то сумма которую вы потратили умножиться на 2!</text></center>
                    </Div>
                
            </Panel>
        );
    }
 
}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
