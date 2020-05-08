import{ Question} from './question'
import { Choice } from './choice';
export class Survey {
    constructor( public name: string, public text: string, public question: string, public choices: Array<Choice>){

    }
}
