import submitForm from "./ContactForm/contactForm";

function App() {
  return (
    <div className="App">
      <form
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
      </form>
    </div>
  );
}

export default App;
