
import { Howl } from 'howler';
import { useEffect } from 'react';
import SequenceStore from './SequenceStore';
import { observer } from 'mobx-react-lite';
import { FormsType } from './Form';

const monSonAJouer = new Howl({
    src: 'click.mp3',
    autoplay: false
});

const Message = props => <div className="row justify-content-between align-items-end">
    <div className="col-auto">
        <i className="nes-bcrikko"></i>
    </div>
    <div className="col py-4">
        <div className="nes-balloon from-left m-0 w-100">
            <p>{props.content}</p>
        </div>
    </div>
</div>

const MessagesList = observer(() => SequenceStore.messages.map(
    (m, i) => <Message {...m} key={i} />
))

const Form = observer(() => (SequenceStore.currentAnswerType)
    ? <div className='fixed-bottom'>
        {FormsType[SequenceStore.currentAnswerType]()}
    </div>
    : null
)


export const ChatBot = props => {
    useEffect(() => {
        SequenceStore.script = props;
        SequenceStore.start();
    }, []);

    return <>
        <div className="container d-grid gap-5 py-5 col-12 col-sm-10 col-md-8 col-lg-6 col-lg-4">
            <MessagesList />
            <button onClick={() => monSonAJouer.play()} className='nes-btn is-primary'>Click Me</button>
        </div>
        <Form />
    </>
}