import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("A name is required")
    .min(3, "The name must be at least 3 characters long"),
  email: yup
    .string()
    .email("must be an email")
    .required("email is required"),
  password: yup
    .string()
    .required("A password is required")
    .min(6, "The password must be at least 6 characters long"),
  termsOfService: yup.boolean(),
});