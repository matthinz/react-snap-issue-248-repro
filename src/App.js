import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/page-with-pdf/" component={PageWithPDF} />
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Link to page with PDF: <Link to="/page-with-pdf/">link</Link>
      </p>
    </div>
  );
}

function PageWithPDF() {
  return (
    <div>
      <h1>Page With PDF</h1>
      <p>
        Link to PDF:
        <a href="/example.pdf">link</a>
      </p>
    </div>
  );
}

export default App;
