import{ Question} from './question'
import { Choice } from './choice';
export class Survey {
    // constructor(public id: number, public text: string, public question: string, public choices: Array<Choice>){

    // }

    constructor(public text: string,public choices:Choice){

    }
}
