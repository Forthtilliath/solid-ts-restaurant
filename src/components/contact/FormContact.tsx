import { createSignal } from "solid-js";
import { FormInput } from "./FormInput";

export function FormContact() {
  /**
   * error : 
   * {
   *   empty: true,
   *   pattern: true
   * }
   */
  const [emptyFields, setEmptyFields] = createSignal<string[]>([]);
  const handleSubmit = (e: TSubmitEvent) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const arrEmptyFields = Array.from(formData)
      .filter(([, value]) => value === "")
      .map(([name]) => name);

    if (arrEmptyFields.length) {
      setEmptyFields(arrEmptyFields);
      return;
    }

    console.log("Envoie du message... ", ...formData);
    form.reset();
  };

  return (
    <form class='w-full' onSubmit={handleSubmit}>
      <div class="grid md:grid-cols-3 gap-4 mt-5 mx-auto p-2 w-full max-w-[500px] md:w-auto md:max-w-full">
        {/* <div class="grid grid-cols-3 gap-8 mt-5 bg-ori-black/70"> */}
        {/* <div class=""> */}
        <FormInput
          error={emptyFields().includes("name")}
          name="name"
          icon="user"
          placeholder="Votre nom"
        />
        <FormInput
          error={emptyFields().includes("mail")}
          name="mail"
          icon="mail"
          placeholder="Votre courriel"
        />
        <FormInput
          error={emptyFields().includes("phone")}
          name="phone"
          icon="phone"
          placeholder="Votre n° de téléphone"
        />
        {/* </div> */}
        <div class="md:col-span-3">
          <FormInput
            error={emptyFields().includes("subject")}
            name="subject"
            icon="subject"
            placeholder="Objet"
          />
        </div>
        <div class="md:col-span-3">
          <FormInput
            error={emptyFields().includes("message")}
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
