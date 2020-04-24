export interface IWitotoComponent {
    beforeRender(): void;
    onReady(): void;
    onDestroy(): void;
}