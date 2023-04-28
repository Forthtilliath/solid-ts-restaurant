import { Accessor, Match, Show, Switch, mergeProps } from "solid-js";
import {
  BsMailbox2,
  FaSolidPhoneFlip,
  FaSolidUser,
  RiFileList3Fill,
} from "./ContactIcons";

type Props = {
  icon?: "user" | "phone" | "mail" | "subject";
  placeholder: HTMLInputElement["placeholder"];
  name: TInputName;
  error: Accessor<TError>;
  type?: "text" | "textarea";
  pattern?: HTMLInputElement["pattern"];
};

export function FormInput(props: Props) {
  const hasError = () => {
    const err = props.error()[props.name];
    return err.empty || err.pattern;
  };

  // let input = HTMLInputElement;

  return (
    <div class="relative w-full mb-3">
      <span class="z-10 h-[50px] leading-snug font-normal text-center text-ori-black absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 flex">
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
      <Show
        when={props.type === "textarea"}
        fallback={
          <input
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            pattern={props.pattern}
            class="p-3 placeholder-slate-400 text-ori-black relative bg-white rounded border border-slate-400 outline-none focus:outline-none focus:ring w-full"
            classList={{
              "pl-10": props.icon !== undefined,
              "border-red-600 border-2 rounded-b-none": hasError(),
            }}
          />
        }
      >
        <textarea
          name={props.name}
          placeholder={props.placeholder}
          class="p-3 placeholder-slate-400 text-ori-black bg-white rounded border border-slate-400 outline-none focus:outline-none focus:ring w-full h-48"
          classList={{
            "border-red-600 border-2 rounded-b-none": hasError(),
          }}
        />
      </Show>
      <Show when={hasError()}>
        {/* <Show when={props.error} fallback={<div class="h-8" />}> */}
        <p
          class="text-red-100 font-bold text-xs px-2 bg-red-600 w-full p-1 rounded rounded-t-none"
          classList={{
            "-mt-[6px]": props.type === "textarea",
          }}
        >
          <Switch>
            <Match when={props.error()[props.name].empty}>
              Veuillez remplir le champ
            </Match>
            <Match when={props.error()[props.name].pattern}>
              Veuillez respecter le pattern
            </Match>
          </Switch>
        </p>
      </Show>
    </div>
  );
}
