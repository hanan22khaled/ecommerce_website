import { createContext, useContext, useState } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
    // هنا كمان تقدر تبعت الرسالة لـ Firebase
  };

  return (
    <ContactContext.Provider value={{ messages, addMessage }}>
      {children}
    </ContactContext.Provider>
  );
};

// ✅ الهـوك اللي كان ناقص
export const useContact = () => {
  return useContext(ContactContext);
};
