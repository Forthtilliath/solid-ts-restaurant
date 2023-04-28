import { NAMES } from "../components/contact/FormContact";

declare global {
    type TInputName = (typeof NAMES)[number];
    type TInputError = Record<"empty" | "pattern", boolean>;
    type TError = Record<TInputName, TInputError>;
}