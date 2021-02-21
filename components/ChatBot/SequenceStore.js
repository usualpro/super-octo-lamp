import { makeAutoObservable, toJS } from 'mobx';
import { Howl } from 'howler';

const newMessageSoundNotification = new Howl({
    src: 'click.mp3',
    autoplay: false
});

class SequenceStore {
    script = null;
    messages = [];
    currentAnswerType = null;

    constructor() {
        makeAutoObservable(this);
    }

    addMessage(anchorId) {
        const correspondingPhrase = (phrase) => (phrase.id === anchorId)
        const scriptSequence = this.script.data.find(correspondingPhrase);
        this.pushMessageToMessageList(scriptSequence);
    }

    pushMessageToMessageList(message) {
        this.messages.push(message);
        this.startTimer();
        newMessageSoundNotification.play();
    }

    addNewMessageFromUser(form) {
        const formData = new FormData(form.target);
        const submittedData = Object.fromEntries(formData);
        submittedData.timeBeforeNextPhrase = 3000;
        submittedData.fromUser = true;
        this.currentAnswerType = null;
        this.pushMessageToMessageList(submittedData);
    }

    get currentMessage() {
        return this.messages[this.messages.length - 1]
    }

    showNextPhrase() {
        this.addMessage(this.currentMessage.nextPhraseId);
    }

    askForAnAnswer() {
        this.currentAnswerType = this.currentMessage.answerType;
    }

    startTimer() {
        const ifWeDontNeedAnswer = (this.currentMessage.timeBeforeNextPhrase && this.currentMessage.nextPhraseId && !this.currentMessage.answerType);
        (ifWeDontNeedAnswer)
            ? setTimeout(() => this.showNextPhrase(), this.currentMessage.timeBeforeNextPhrase)
            : this.askForAnAnswer()
    }

    start() {
        this.addMessage(this.script.startWithAnchor);
    }
}
export default new SequenceStore();