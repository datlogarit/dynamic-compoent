import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

@Component({
  selector: "app-example-container",
  templateUrl: "./example-container.component.html",
  styleUrls: ["./example-container.component.css"],
})
export class ExampleContainerComponent implements OnInit {
  @ViewChild("dynamicComponent", { read: ViewContainerRef, static: true })
  containerRef!: ViewContainerRef;

  constructor() { }

  ngOnInit() { }

  async addDynamicCompOne() {//lazy load component DynamicContentOneComponent
    const { DynamicContentOneComponent } = await import('../dynamic-content-one/dynamic-content-one.component');
    const componentFactory = DynamicContentOneComponent
    const componentRef = this.containerRef.createComponent(componentFactory);
    componentRef.instance.data = "INPUT DATA 1";
  }

  async addDynamicCompTwo() {
   const { DynamicContentTwoComponent } = await import('../dynamic-content-two/dynamic-content-two.component');
    const componentFactory = DynamicContentTwoComponent
    const componentRef = this.containerRef.createComponent(componentFactory);
    componentRef.instance.data = "INPUT DATA 2";
  }

  clearDynamicComp() {
    this.containerRef.clear();
  }
}
