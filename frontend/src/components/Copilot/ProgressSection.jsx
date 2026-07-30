function ProgressSection({ progress, message }) {
  return (
    <div className="progress-section">
      <div className="progress-title">
        Extraction Progress

        <span>{progress}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <small>{message}</small>
    </div>
  );
}

export default ProgressSection;