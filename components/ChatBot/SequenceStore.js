import { makeAutoObservable } from 'mobx';

class SequenceStore {
    script = null;
    messages = [];
    currentAnswerType = null;
    constructor() {
        makeAutoObservable(this);
    }
    get currentMessage() {
        return this.messages[this.messages.length - 1];
    }

    addMessage(anchorId) {
        const correpondingPhrase = (phrase) => (phrase.id === anchorId);
        const scriptSequence = this.script.data.find(correpondingPhrase);
        this.pushMessageToMessageList(scriptSequence);
    }

    pushMessageToMessageList(message) {
        this.messages.push(message);
        this.startTimer();
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