import Bio from "../../layouts/Contact/Bio";
import Form from "../../layouts/Contact/Form";

function Contact() {
  return (
    <main className="min-h-[95vh] flex pt-40 px-20">
      <Bio />
      <Form />
    </main>
  );
}

export default Contact;
