import SequenceStore from '../SequenceStore';


const onFormSubmit = (form) => {
    form.preventDefault();
    SequenceStore.addNewMessageFromUser(form);
}

export const Text = () => <div className="container col-12 col-sm-10 col-md-8 col-lg-6 col-lg-4 py-3">
    <form onSubmit={onFormSubmit}>
        <div className='row align-items-center'>
            <div className="col-10">
                <input type="hidden" name='nextPhraseId' value={SequenceStore.currentMessage.nextPhraseId} />
                <textarea id="textarea_field" className="nes-textarea" name='content' placeholder="Votre réponse"></textarea>
            </div>
            <div className="col-2">
                <button type='submit' className='nes-btn is-primary w-100'> > </button>
            </div>
        </div>
    </form>
</div>