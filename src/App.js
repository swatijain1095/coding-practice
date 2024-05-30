import submitForm from "./components/ContactForm/contactForm";

import Accordion from "./components/Accordion/Accordion";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  return (
    <div className="App">
      {/* <form
        onSubmit={submitForm}
        action="https://www.greatfrontend.com/api/questions/contact-form"
        method="post"
      >
        <div>
          <label>Name</label>
          <input id="name-input" name="name" type="text" />
        </div>
        <div>
          <label>Email</label>
          <input id="email-input" name="email" type="email" />
        </div>
        <div>
          <label htmlFor="message-input">Message</label>
          <textarea id="message-input" name="message"></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form> */}
      <Accordion />
      <hr style={{ height: 2, borderWidth: 2, color: "black" }} />
      <div className="bars">
        <ProgressBar value={0} />
        <ProgressBar value={25} />
        <ProgressBar value={50} />
        <ProgressBar value={75} />
        <ProgressBar value={100} />
      </div>
    </div>
  );
}

export default App;
