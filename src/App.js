import "./styles.css";
import ContactCard from "./component/ContactCard";
import "./component/ContactCardStyles.css";

export default function App() {
  return (
    <div className="App">
      <h2 className="home"> Home </h2>
      <div className="head">
        <h3 className="header">What's happening?</h3>
        <p className="reply"> Everyone can reply </p>

        <button className="button">Tweet</button>
      </div>
      <ContactCard
        name="Javascript"
        id="@javascript"
        tweet="Javascript is a scripting languages, primarily used on the Web. It is used to enhance HTML pages and is commonly found embedded in HTML code. JavaScript is an interpreted language. Thus, it doesn't need to be compiled. JavaScript renders web pages in an interactive and dynamic fashion."
      />
      <ContactCard
        name="Reactjs"
        id="@reactjs"
        tweet="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. ... React can be used as a base in the development of single-page or mobile applications."
      />
      <ContactCard
        name="Dom"
        id="@dom"
        tweet="The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web."
      />
      <ContactCard
        name="Python"
        id="@python"
        tweet="Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems."
      />
      <ContactCard
        name="Hypertext Markup language"
        id="@html"
        tweet="HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn"
      />
    </div>
  );
}
