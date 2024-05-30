import "./style.css";

export default function ProgressBar({ value }) {
  return (
    <div className="progress">
      <div
        style={{
          maxWidth: `${value}%`,
        }}
        className="progress-shown"
      >
        {value}%
      </div>
    </div>
  );
}
