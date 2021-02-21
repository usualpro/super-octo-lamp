import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite'
import SequenceStore from './SequenceStore';
import { FormsType } from './Form';
import ChatBotStyle from '../../styles/ChatBot.module.scss';


const Message = props => {
    const row = useRef(null);
    const { fromUser } = props;
    const colWithIcoOrder = (fromUser) ? 'order-5' : 'order-1';
    const colWithContentOrder = (fromUser) ? 'order-1' : 'order-5';
    const direction = (fromUser) ? 'right' : 'left';
    const avatar = (fromUser) ? 'octocat animate' : 'kirby';
    useEffect(() => {
        row.current.scrollIntoView();
    }, []);
    return <div ref={row} className="row justify-content-between align-items-end">
        <div className={`col-auto ${colWithIcoOrder}`}>
            <i className={`nes-${avatar}`}></i>
        </div>
        <div className={`col py-4 ${colWithContentOrder}`}>
            <div className={`nes-balloon from-${direction} m-0 w-100`}>
                <p>{props.content}</p>
            </div>
        </div>
    </div>
}

const MessagesList = observer(() => (SequenceStore.messages)
    ? SequenceStore.messages.map(
        (q, i) => <Message {...q} key={i} />
    )
    : <>Loading</>
)

const Form = observer(
    () => (SequenceStore.currentAnswerType)
        ? <div className={`${ChatBotStyle.Form} fixed-bottom`}>
            {FormsType[SequenceStore.currentAnswerType]()}
        </div>
        : null
);

const ChatBot = (props) => {
    useEffect(() => {
        SequenceStore.script = props;
        SequenceStore.start();
    }, []);
    return <>
        <div className={`${ChatBotStyle.ChatBot} container ChatBot d-grid gap-5 py-5 col-12 col-sm-10 col-md-8 col-lg-6 col-lg-4`}>
            <MessagesList />
        </div>
        <Form />
    </>
};
export default ChatBot;