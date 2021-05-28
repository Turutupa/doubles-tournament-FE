import { FormHelperText, Select } from "@chakra-ui/react";

interface SelectOption {
  value: string;
  label: string;
}

const renderSelect = (
  options: SelectOption[],
  onChange: (args?: any) => void
) => (
  <>
    <Select
      width="100%"
      placeholder="Select an option"
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option: SelectOption) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
    <FormHelperText></FormHelperText>
  </>
);

export default renderSelect;
