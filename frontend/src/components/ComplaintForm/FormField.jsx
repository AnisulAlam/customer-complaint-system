import { useDispatch, useSelector } from "react-redux";
import { updateComplaint } from "../../redux/complaintSlice";

function FormField({ label, name, type }) {
  const dispatch = useDispatch();

  const complaint = useSelector(
    (state) => state.complaint.complaint
  );

  const recentlyEdited = useSelector(
    (state) => state.complaint.recentlyEdited || []
  );

  const handleChange = (e) => {
    dispatch(
      updateComplaint({
        [name]: e.target.value,
      })
    );
  };

  const highlightClass = recentlyEdited.includes(name)
    ? "highlight-field"
    : "";

  if (type === "textarea") {
    return (
      <div className={`field ${highlightClass}`}>
        <label>{label}</label>

        <textarea
          value={complaint[name] || ""}
          onChange={handleChange}
          placeholder="Awaiting AI extraction..."
          rows={5}
        />
      </div>
    );
  }

  if (type === "select") {
    const options =
      name === "severity"
        ? ["Low", "Medium", "High", "Critical"]
        : ["Low", "Medium", "High", "Urgent"];

    return (
      <div className={`field ${highlightClass}`}>
        <label>{label}</label>

        <select
          value={complaint[name] || ""}
          onChange={handleChange}
        >
          <option value="">Select...</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={`field ${highlightClass}`}>
      <label>{label}</label>

      <input
        value={complaint[name] || ""}
        onChange={handleChange}
        placeholder="Awaiting AI extraction..."
      />
    </div>
  );
}

export default FormField;