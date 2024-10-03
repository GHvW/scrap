// @ts-check

export class CancellationToken {

    constructor() {
        this.cancelActions = [];
    }

    /**
     * Add a callback to the token to be called if cancel is called
     * @param {() => void} callback 
     */
    onCancel(callback) {
        this.cancelActions.push(callback);
    }

    /**
     * runs all of the cancel actions
     * @returns {void}
     */
    cancel() {
        for (const cancelAction of this.cancelActions) {
            cancelAction();
        }
    }
}