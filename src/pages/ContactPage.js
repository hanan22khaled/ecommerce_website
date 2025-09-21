import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-2">
      <div className="grid grid-cols-1 gap-8 max-w-5xl justify-center items-center w-full">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
