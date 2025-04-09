import { InputText } from "../../../components/Input";

function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="w-1/2">
      <p className="text-7xl">Let’s build something cool together</p>
      <form onSubmit={handleSubmit} className="mt-10">
        <InputText
          value=""
          placeholder="James Robert"
          id="name"
          label="Name"
          required
        />
        <br />
        <br />
        <InputText
          value=""
          placeholder="ayush.barnwal@brightscout.com"
          id="email"
          label="Email"
          required
        />
        <br />
        <br />
        <InputText
          value=""
          placeholder="For web design work Enquire"
          id="subject"
          label="Subject"
          required
        />
        <br />
        <br />
        <InputText
          value=""
          placeholder="Type your Message"
          id="message"
          label="Message"
          rows={4}
          required
        />
        <br />
        <button
          type="submit"
          className="py-4 px-10 cursor-pointer bg-custom-black text-slime rounded-full"
        >
          Submit
        </button>
      </form>
      <br />
      <br />
    </section>
  );
}

export default Form;
