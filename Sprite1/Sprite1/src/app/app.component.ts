import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] }
)
export class AppComponent {
    private title:string = 'Sprite';
    private url:string = 'http://fe.it-academy.by/Examples/cards2.png';
    private offsetX:number =0;
    private offsetY:number =0;
    private width:number =143;
    private height:number =193;;

    

    getTitle():string {
        return this.title;
    };

    getUrl():string {
        return this.url;
    }

    getOffsetX():number {
        return this.offsetX;
    };

    getOffsetY():number {
        return this.offsetY;
    };

    getWidth():number {
        return this.width;
    };

    getHeight():number {
        return this.height;
    };

    clickedSprite():void { 
        if (this.offsetX>-429){
            this.offsetX-=144;
        } else{
            this.offsetX = 0;
            this.offsetY -=195;
        }
        
    }
}