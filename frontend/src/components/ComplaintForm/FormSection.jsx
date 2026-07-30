import FormField from "./FormField";

function FormSection({ title, fields, textarea }) {
  return (
    <div className="section">
      <h4>{title}</h4>

      <div className="grid">
        {fields.map((field) => (
          <FormField
            key={field.name}
            {...field}
          />
        ))}
      </div>

      {textarea && (
        <FormField
          label={textarea.label}
          name={textarea.name}
          type="textarea"
        />
      )}
    </div>
  );
}

export default FormSection;