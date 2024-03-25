import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetBackground {
    //TypeScript allows to init the element reference and assign it to property in constructor method.

    // We need to create a property here because the ngOnInit can not access directly the element reference.
    // private element: ElementRef; 

    constructor(private element: ElementRef) {
        // this.element = element;
    }

    // Note: implement code in ngOnInit because the ngOnInit hook is called after all component properties are fully initialized.
    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = "#36454F";
        this.element.nativeElement.style.color = "white";
    }

}