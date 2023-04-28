import {
  Accessor,
  Match,
  Show,
  Switch,
  mergeProps,
  onCleanup,
  onMount,
} from "solid-js";
import {
  BsMailbox2,
  FaSolidPhoneFlip,
  FaSolidUser,
  RiFileList3Fill,
} from "./ContactIcons";
import { SetStoreFunction } from "solid-js/store";

type Props = {
  icon?: "user" | "phone" | "mail" | "subject";
  placeholder: HTMLInputElement["placeholder"];
  name: TInputName;
  error: TError;
  setError: SetStoreFunction<TError>;
  type?: "text" | "textarea";
  pattern?: HTMLInputElement["pattern"];
};

export function FormInput(props: Props) {
  let inputRef: HTMLTextAreaElement | HTMLInputElement;

  const hasError = () => {
    const err = props.error[props.name];
    return err.empty || err.pattern;
  };

  const handleInvalid = (event: Event) => {
    event.preventDefault();
    props.setError(props.name, { pattern: true });
  };

  const handleInput = (_event: Event) => {
    props.setError(props.name, { empty: false, pattern: false });
  };

  onMount(() => {
    inputRef.addEventListener("invalid", handleInvalid);
    inputRef.addEventListener("input", handleInput);
  });

  onCleanup(() => {
    inputRef.removeEventListener("invalid", handleInvalid);
    inputRef.removeEventListener("input", handleInput);
  });

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
            ref={inputRef! as HTMLInputElement}
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            pattern={props.pattern}
            required
            class="p-3 placeholder-slate-400 text-ori-black relative bg-white rounded border border-slate-400 outline-none focus:outline-none focus:ring w-full"
            classList={{
              "pl-10": props.icon !== undefined,
              "border-red-600 border-2 rounded-b-none": hasError(),
            }}
          />
        }
      >
        <textarea
          ref={inputRef! as HTMLTextAreaElement}
          name={props.name}
          placeholder={props.placeholder}
          required
          class="p-3 placeholder-slate-400 text-ori-black bg-white rounded border border-slate-400 outline-none focus:outline-none focus:ring w-full h-48"
          classList={{
            "border-red-600 border-2 rounded-b-none": hasError(),
          }}
        />
      </Show>
      <Show when={hasError()}>
        <p
          class="text-red-100 font-bold text-xs px-2 bg-red-600 w-full p-1 rounded rounded-t-none"
          classList={{
            "-mt-[6px]": props.type === "textarea",
          }}
        >
          <Switch>
            <Match when={props.error[props.name].empty}>
              Veuillez remplir le champ
            </Match>
            <Match when={props.error[props.name].pattern}>
              Format incorrect
            </Match>
          </Switch>
        </p>
      </Show>
    </div>
  );
}
