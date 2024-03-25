import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetBackground {
    //TypeScript allows to init the element reference and assign it to property in constructor method.

    // We need to create a property here because the ngOnInit can not access directly the element reference.
    // private element: ElementRef; 
    // private renderer: Renderer2;

    constructor(private element: ElementRef, private renderer: Renderer2) {
        // this.element = element;
        // this.renderer = renderer;
    }

    // Note: implement code in ngOnInit because the ngOnInit hook is called after all component properties are fully initialized.
    ngOnInit() {
        // We should nto access the DOM element directly. => Should using Renderer2.
        // this.element.nativeElement.style.backgroundColor = "#36454F";
        // this.element.nativeElement.style.color = "white";

        //=> Should using Renderer2.
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F');
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    }



}