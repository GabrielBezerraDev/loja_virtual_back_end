import { Injectable } from '@nestjs/common';

type ArrayLetters = [string,string];
type ObjectCondition = {[k:string]:ArrayLetters};

@Injectable()
export class GenerateCodeProductService {
    private codeProduct: string = "";
    private letters: Array<string> = 
    [
        "A","B","C","D","E","F","G","H","I","J","K","L",
        "M","N","O","P","Q","R","S","U","V","X","Y","W","Z"
    ];
    private numbers: Array<string> = ["0","1","2","3","4","5","6","7","8","9"];
    private typeCharacter: ObjectCondition = {
        num: ["",""],
        upperCase: ["",""],
        lowerCase: ["",""]
    }
    private indexController: 0 | 1 = 0;


    private createCode():string{
        for(let i:number = 0; i < 5; i++){
            this.addCharacter(this.letters, "upperCase");
            this.addCharacter(this.numbers, "num");
            this.indexController === 0 ? this.indexController = 1 : this.indexController = 0;
        }
        let code = this.codeProduct;
        this.codeProduct = "";   
        return code;
    }

    private addCharacter(list:Array<string>, typeCharacterKey: keyof ObjectCondition):void{
        this.typeCharacter[typeCharacterKey][this.indexController] = this.pickRandom(list);
        while(this.typeCharacter[typeCharacterKey][0] === this.typeCharacter[typeCharacterKey][1]) 
        this.typeCharacter[typeCharacterKey][this.indexController] = this.pickRandom(list);
        this.codeProduct += this.typeCharacter[typeCharacterKey][this.indexController];
    }

    private pickRandom(list:Array<string>):string{
        let index: number = Math.floor(Math.random()*list.length);
        return list[index];
    }

    private addElementList(list:Array<string>, element:string):void{
        list.push(element);
    }

    private removeElementList(list:Array<string>, element:string):void{
        let indexElement = list.indexOf(element);
        list.splice(indexElement,1);
    }

    public getCodeProduct():string{
        return this.createCode();
    }

}