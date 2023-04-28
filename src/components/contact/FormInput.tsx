import { Match, Switch } from "solid-js";
import {
  BsMailbox2,
  FaSolidHouseChimney,
  FaSolidPhoneFlip,
  FaSolidUser,
  RiFileList3Fill,
} from "./ContactIcons";

type Props = {
  icon: "user" | "phone" | "mail" | "subject";
  placeholder: string;
};

export function FormInput(props: Props) {
  return (
    <div class="relative flex w-full flex-wrap items-stretch mb-3">
      <span class="z-10 h-full leading-snug font-normal text-center text-ori-black absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 flex">
        <Switch>
          <Match when={props.icon === "user"}>
            <FaSolidUser size={"1.2rem"} />
          </Match>
          <Match when={props.icon === "phone"}>
            <FaSolidPhoneFlip size={"1.2rem"} />
          </Match>
          <Match when={props.icon === "mail"}>
            <BsMailbox2 size={"1.2rem"} />
          </Match>
          <Match when={props.icon === "subject"}>
            <RiFileList3Fill size={"1.2rem"} />
          </Match>
        </Switch>
      </span>
      <input
        type="text"
        placeholder={props.placeholder}
        class="p-3 placeholder-slate-400 text-ori-black relative bg-white rounded border border-slate-400 outline-none focus:outline-none focus:ring w-full pl-10"
      />
    </div>
  );
}
