// Validation
export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(vaildatableInput: Validatable) {
  let isValid = true;
  if (vaildatableInput.required) {
    console.log("required check");
    if (typeof vaildatableInput.value === "string") {
      isValid = isValid && vaildatableInput.value.toString().trim().length !== 0;
    }
    if (vaildatableInput.minLength != null && typeof vaildatableInput.value === "string") {
      isValid = isValid && vaildatableInput.value.length >= vaildatableInput.minLength;
    }
    if (vaildatableInput.maxLength != null && typeof vaildatableInput.value === "string") {
      isValid = isValid && vaildatableInput.value.length <= vaildatableInput.maxLength;
    }
    if (vaildatableInput.min != null && typeof vaildatableInput.value === "number") {
      isValid = isValid && vaildatableInput.value >= vaildatableInput.min;
    }
    if (vaildatableInput.max != null && typeof vaildatableInput.value === "number") {
      isValid = isValid && vaildatableInput.value <= vaildatableInput.max;
    }
  }
  console.log(`isValid: ${isValid}`);
  return isValid;
}
