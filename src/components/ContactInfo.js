import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function ContactInfo() {
  return (
    <div className="bg-white font-inter p-4 sm:p-6 md:p-8 space-y-6 mt-6 text-center w-full max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black mb-1 mx-auto">
        Get In Touch
      </h2>
      <p className="w-full sm:w-3/4 md:w-2/3 text-sm text-center mx-auto pb-7 px-2 sm:px-4 text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
        veniam vel.
      </p>

      {/* ✅ Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="flex flex-col w-full h-52 bg-gray-100 rounded-2xl p-3 items-center justify-center space-y-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-teal-500 text-4xl" />
          <span className="text-md font-base text-gray-700">102 Street 2714 Donovan</span>
          <p className="text-gray-500 text-sm">Lorem, ipsum dolor sit amet</p>
        </div>

        <div className="flex flex-col w-full h-52 bg-gray-100 rounded-2xl p-3 items-center justify-center space-y-4">
          <FontAwesomeIcon icon={faPhoneVolume} className="text-teal-500 text-4xl" />
          <span className="text-md font-base text-gray-700">+20 123 456 788</span>
          <p className="text-gray-500 text-sm">Lorem, ipsum dolor sit amet</p>
        </div>

        <div className="flex flex-col w-full h-52 bg-gray-100 rounded-2xl p-3 items-center justify-center space-y-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-teal-500 text-4xl" />
          <span className="text-md font-base text-gray-700">info@example.com</span>
          <p className="text-gray-500 text-sm">Lorem, ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
}
