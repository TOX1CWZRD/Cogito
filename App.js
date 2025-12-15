// src/App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DocumentationPage from './DocumentationPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <DocumentationPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
