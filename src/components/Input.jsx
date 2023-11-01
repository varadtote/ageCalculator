export function Input({
  label,
  placeHolder,
  value,
  onChange,
  minLength,
  maxlengthValue,
  classStyles,
  errorText,
  inputStyle,
  universalError,
}) {
  return (
    <div className="inputComponent" style={classStyles}>
      <label style={classStyles}>{label}</label>
      <input
        type="tel"
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChange(e)}
        minLength={minLength}
        maxLength={maxlengthValue}
        style={inputStyle}
        required
      />
      <span className="field_with_errors">{errorText}</span>
      <span className="field_with_errors">{universalError}</span>
    </div>
  );
}
