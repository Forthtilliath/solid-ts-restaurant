import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { FormInput } from "./FormInput";

export const NAMES = ["name", "mail", "phone", "subject", "message"] as const;

const INITIAL_ERROR = NAMES.reduce(
  (acc, name) => ({
    ...acc,
    [name]: { empty: false, pattern: false },
  }),
  {} as TError
);

export function FormContact() {
  const [error, setError] = createStore<TError>(INITIAL_ERROR);
  const handleSubmit = (e: TSubmitEvent) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const checks = Array.from(formData).reduce(
      (err, [name, value]) => ({
        ...err,
        [name]: { empty: value === "", pattern: false },
      }),
      {} as TError
    );
    setError(checks);

    if (Object.values(checks).some((check) => check.empty)) {
      return;
    }

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
          setError={setError}
          name="name"
          icon="user"
          placeholder="Votre nom"
          pattern="(?=[\w._ \-]{3,20}$)(?!.*[_. \-]{2})[^_. \-].*[^_. \-]"
        />
        <FormInput
          error={error}
          setError={setError}
          name="mail"
          icon="mail"
          placeholder="Votre courriel"
          pattern="[\w-\.]+@([\w-]+\.)+[\w-]{2,4}"
        />
        <FormInput
          error={error}
          setError={setError}
          name="phone"
          icon="phone"
          placeholder="Votre n° de téléphone"
          pattern="(?:[\s.-]*\d{2}){5}"
        />
        {/* </div> */}
        <div class="md:col-span-3">
          <FormInput
            error={error}
            setError={setError}
            name="subject"
            icon="subject"
            placeholder="Objet"
          />
        </div>
        <div class="md:col-span-3">
          <FormInput
            error={error}
            setError={setError}
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
