import { JS_CREATION_DATE } from "../core/constants/settings";
import { JSBlock } from "./js-block";
import { TimerBlock } from "./timer";

export class App {
    #jsBlock
    #timerBlock

    constructor() {
        this.#jsBlock = new JSBlock();
        this.#timerBlock = new TimerBlock(JS_CREATION_DATE);
    }

    run() {
        const jsBlockHTML = this.#jsBlock.render();
        const timerBlockHTML = this.#timerBlock.render();
        document.body.append(jsBlockHTML, timerBlockHTML);
    }
}