import SequenceStore from '../SequenceStore';

export const Text = () => <div className='container col-12 col-sm-10 col-md-8 col-lg-6 col-lg-4'>
    <form>
        <div class='row'>
            <div className="col-10">
                <input type="hidden" name='nextPhraseId' value={SequenceStore.currentMessage.nextPhraseId} />
                <textarea className='nes-text-area' name="content" placeholder='Votre réponse'></textarea>
            </div>
            <div className="col-2">
                <button type='submit'> > </button>
            </div>
        </div>
    </form>
</div>