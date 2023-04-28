import { createSignal } from "solid-js";
import { FormInput } from "./FormInput";

export const NAMES = ["name", "mail", "phone", "subject", "message"] as const;
const patterns = {
  name: /\w{3,}/
}

const INITIAL_ERROR = NAMES.reduce(
  (acc, name) => ({
    ...acc,
    [name]: { empty: false, pattern: false },
  }),
  {} as TError
);

export function FormContact() {
  /**
   * error :
   * {
   *   empty: true,
   *   pattern: true
   * }
   */
  // const [emptyFields, setEmptyFields] = createSignal<string[]>([]);
  const [error, setError] = createSignal<TError>(INITIAL_ERROR);
  const handleSubmit = (e: TSubmitEvent) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // const input = form["name" as TInputName] as HTMLInputElement;
    // console.log(new RegExp(input.pattern).test(input.value));
    setError(
      Array.from(formData).reduce((err, [name, value]) => {
        const input = form[name] as HTMLInputElement;
        // const testPattern = new RegExp(input.pattern).test(input.value);
        const testPattern = new RegExp(input.pattern).test(input.value);
        console.log(name, testPattern)
        return {
          ...err,
          [name]: { empty: value === "", pattern: !testPattern },
        };
      }, {} as TError)
    );
    // setError(
    //   Array.from(formData).reduce(
    //     (err, [name, value]) => ({
    //       ...err,
    //       [name]: { empty: value === "", pattern: false },
    //     }),
    //     {} as TError
    //   )
    // );

    console.log("Envoie du message... ", ...formData);
    form.reset();
  };

  return (
    <form class="w-full" onSubmit={handleSubmit}>
      <div class="grid md:grid-cols-3 gap-4 mt-5 mx-auto p-2 w-full max-w-[500px] md:w-auto md:max-w-full">
        {/* <div class="grid grid-cols-3 gap-8 mt-5 bg-ori-black/70"> */}
        {/* <div class=""> */}
        <FormInput
          error={error}
          name="name"
          icon="user"
          placeholder="Votre nom"
          pattern="\w{3,}"
        />
        <FormInput
          error={error}
          name="mail"
          icon="mail"
          placeholder="Votre courriel"
        />
        <FormInput
          error={error}
          name="phone"
          icon="phone"
          placeholder="Votre n° de téléphone"
        />
        {/* </div> */}
        <div class="md:col-span-3">
          <FormInput
            error={error}
            name="subject"
            icon="subject"
            placeholder="Objet"
          />
        </div>
        <div class="md:col-span-3">
          <FormInput
            error={error}
            name="message"
            placeholder="Votre message"
            type="textarea"
          />
        </div>
        <div class="md:col-span-3 justify-self-end">
          <button
            class="bg-ori-green-light text-white active:bg-ori-green font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </div>
    </form>
  );
}
