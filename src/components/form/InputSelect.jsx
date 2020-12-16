import { Input, Col } from "reactstrap";

export const InputSelect = ({ name, value, onChange, Setter, options }) => {
  return (
    <Col md={{ size: 3, offset: 1 }}>
      <Input
        type="select"
        name={name}
        value={value}
        onChange={() => onChange(event, Setter)}
      >
        {options.map((opt) => (
          <option value={opt.val} key={opt.val}>
            {opt.text}
          </option>
        ))}
      </Input>
    </Col>
  );
};
