import { FormInput } from "./FormInput";

export function FormContact() {
  const handleSubmit = (e: TSubmitEvent) => {
    e.preventDefault();

    console.dir(e.currentTarget);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="grid grid-cols-3 gap-4 mt-5">
        {/* <div class="grid grid-cols-3 gap-8 mt-5 bg-ori-black/70"> */}
        {/* <div class=""> */}
        <FormInput icon="user" placeholder="Votre nom" />
        <FormInput icon="mail" placeholder="Votre courriel" />
        <FormInput icon="phone" placeholder="Votre n° de téléphone" />
        {/* </div> */}
        <div class="col-span-3">
          <FormInput icon="subject" placeholder="Objet" />
        </div>
        <div class="col-span-3">
          <textarea
            placeholder="Votre message"
            class="p-3 placeholder-slate-400 text-ori-black bg-white rounded border border-slate-400 outline-none focus:outline-none focus:ring w-full h-48"
          />
        </div>
        <div class="col-span-3 justify-self-end">
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
