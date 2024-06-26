import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appNot]'
})

export class AppNotDirective {
    constructor( private templateRef: TemplateRef<any>,private viewContainer: ViewContainerRef)
    {

    }
    
    @Input()set appNot(condition: boolean){
        this.viewContainer.createEmbeddedView(this.templateRef);
        if (!condition){
            this.viewContainer.createEmbeddedView(this.templateRef);
        } 
        else {
            this.viewContainer.clear(); 
            }
    }
}