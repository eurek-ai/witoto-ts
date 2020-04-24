import { IWitotoComponent } from "./component.contract";

abstract class WitotoComponent extends HTMLElement implements IWitotoComponent {
  private _template: string;
  constructor(template: string) {
    super();
    this._template = template;
    this.beforeRender();
  }
  connectedCallback(): void {
    this.innerHTML = `${this._template}`;
    setTimeout(() => {
      this.onReady();
    }, 0);
  }
  disconnectedCallback(): void {
    this.onDestroy();
  }
  abstract beforeRender(): void;
  abstract onReady(): void;
  abstract onDestroy(): void;
}

export default WitotoComponent;
