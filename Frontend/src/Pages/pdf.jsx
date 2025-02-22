import React, { useState } from "react";
import "./pdf.css";

const PdfViewer = () => {
  const [pdfUrl, setPdfUrl] = useState("");

  const handleClick = (pdfFile) => {
    setPdfUrl(`/pdfs/${pdfFile}`);
  };

  return (
    <div className="pdf-section">
      <h2>Explore Our Learning Resources</h2>
      <div className="pdf-list">
        {/* Programming PDFs */}
        <div
          className="pdf-item"
          onClick={() => handleClick("programming_basics.pdf")}
        >
          Programming Basics
        </div>
        <div
          className="pdf-item"
          onClick={() => handleClick("advanced_python.pdf")}
        >
          Advanced Python
        </div>
        <div
          className="pdf-item"
          onClick={() => handleClick("data_science.pdf")}
        >
          Data Science
        </div>
        <div className="pdf-item" onClick={() => handleClick("web_design.pdf")}>
          Web Design
        </div>

        {/* Business PDFs */}
        <div
          className="pdf-item"
          onClick={() => handleClick("business_101.pdf")}
        >
          Business 101
        </div>
        <div
          className="pdf-item"
          onClick={() => handleClick("digital_marketing.pdf")}
        >
          Digital Marketing
        </div>
        <div
          className="pdf-item"
          onClick={() => handleClick("entrepreneurship.pdf")}
        >
          Entrepreneurship
        </div>

        {/* Arts & Crafts PDFs */}
        <div className="pdf-item" onClick={() => handleClick("art_theory.pdf")}>
          Art Theory
        </div>
        <div
          className="pdf-item"
          onClick={() => handleClick("graphic_design.pdf")}
        >
          Graphic Design Basics
        </div>
        <div
          className="pdf-item"
          onClick={() => handleClick("painting_techniques.pdf")}
        >
          Painting Techniques
        </div>

        {/* Additional learning PDFs */}
        <div
          className="pdf-item"
          onClick={() => handleClick("creative_writing.pdf")}
        >
          Creative Writing
        </div>
        <div
          className="pdf-item"
          onClick={() => handleClick("photography_basics.pdf")}
        >
          Photography Basics
        </div>
      </div>

      <div className="pdf-viewer">
        {pdfUrl && (
          <iframe
            src={pdfUrl}
            id="pdfEmbed"
            width="100%"
            height="600px"
            title="PDF Viewer"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
