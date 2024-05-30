import { useState } from "react";
import data from "./data";
import "./style.css";

function Accordion() {
  const [selectedId, setSelectedId] = useState(null);
  const handleClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };
  return (
    <div className="accordion">
      {data.map((item) => (
        <div key={item.id} className="accordion-item">
          <div
            onClick={() => handleClick(item.id)}
            className="accordion-item-title"
          >
            <h3>{item.title}</h3>
            <span
              aria-hidden={true}
              className={`accordion-icon ${
                selectedId === item.id && "accordion-icon--rotated"
              }`}
            >
              {" "}
            </span>
          </div>
          {selectedId === item.id && (
            <div className="accordion-item-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
export default Accordion;
