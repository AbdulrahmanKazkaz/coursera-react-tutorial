import { emailRegx } from "./regx";

const required = (val) => val && val.length;

const maxLength = (len) => (val) => !val || val.length <= len;

const minLength = (len) => (val) => val && val.length >= len;

const isNumber = (val) => !isNaN(Number(val));

const validEmail = (val) => emailRegx.test(val);

export const textValidation = (min, max, require = false) => {
  const roles = {
    role: {
      required,
      minLength: minLength(min),
      maxLength: maxLength(max),
    },
    messages: {
      required: "Required ",
      minLength: `Must be Grater than ${min} Characters `,
      maxLength: `Must be ${max} Characters or less `,
    },
  };
  if (!require) {
    delete roles.role.required;
  }
  return roles;
};

export const numberValidation = (min, max, require = false) => {
  const roles = {
    role: {
      required,
      isNumber,
      minLength: minLength(min),
      maxLength: maxLength(max),
    },
    messages: {
      required: "Required ",
      isNumber: "Must be a Number ",
      minLength: `Must be Grater than ${min} Numbers `,
      maxLength: `Must be ${max} Numbers or less `,
    },
  };
  if (!require) {
    delete roles.role.required;
  }
  return roles;
};

export const emailValidation = (min, max, require = false) => {
  const roles = {
    role: {
      required,
      validEmail,
      minLength: minLength(min),
      maxLength: maxLength(max),
    },
    messages: {
      required: "Required ",
      validEmail: "Invaid Email Address ",
      minLength: `Must be Grater than ${min} Characters `,
      maxLength: `Must be ${max} Characters or less `,
    },
  };
  if (!require) {
    delete roles.role.required;
  }
  return roles;
};
