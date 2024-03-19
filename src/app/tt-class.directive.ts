import { Directive,OnInit,Input,ElementRef } from "@angular/core";
@Directive({
    selector:'[ttClass]',
})

export class ttClassDirective implements OnInit{

    @Input()ttClass:string;

    constructor(private el:ElementRef){
    }
    
    ngOnInit(): void {
        this.el.nativeElement.classList.add(this.ttClass);
    }
}