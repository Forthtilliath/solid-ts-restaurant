declare module "*.mp4";

type TSubmitEvent = Event & {
    submitter: HTMLElement;
} & {
    currentTarget: HTMLFormElement;
    target: Element;
}