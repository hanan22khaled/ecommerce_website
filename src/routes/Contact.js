import { ContactProvider } from "../context/ContactContext";
import ContactPage from "../pages/ContactPage";

function App() {
  return (
    <ContactProvider>
      <ContactPage />
    </ContactProvider>
  );
}

export default App;
