import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { useState } from "react";
import { object, string } from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import {
  //FormControl,
  InputAdornment,
 // InputLabel,
 // OutlinedInput,
} from "@mui/material";

export const registerSchema = object({
  username: string()
    .max(10, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required(),
  first_name: string().max(20, "İsim 20 karakterden az olmalıdır.").required(),
  last_name: string()
    .max(20, "Soyisim 30 karakterden az olmalıdır.")
    .required(),

  email: string().email().required(),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
});

const RegisterForm= ({ values, handleChange, errors, touched, handleBlur }) => {
  const [togglePassword, setTogglePassword] = useState(false);

  const togglePasswordHide = () => {
    setTogglePassword(!togglePassword);
  };
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="User Name"
            name="username"
            id="userName"
            type="text"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.username && errors.username}
            error={touched.username && Boolean(errors.username)}
            required
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            required
          />
          <TextField
            label="Image"
            name="image"
            id="image"
            type="url"
            variant="outlined"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.image && errors.image}
            error={touched.image && Boolean(errors.image)}
          />

          <TextField
            label="Bio"
            name="bio"
            id="bio"
            type="text"
            variant="outlined"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.bio && errors.bio}
            error={touched.bio && Boolean(errors.bio)}
          />

          <TextField
            required
            name="password"
            label="Password"
            type={togglePassword ? "text" : "password"}
            id="password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    {togglePassword ? (
                      <Visibility
                        className="cursor_pointer"
                        onClick={togglePasswordHide}
                      />
                    ) : (
                      <VisibilityOff onClick={togglePasswordHide} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" variant="contained" size="large">
            Sign Up
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;


  /* <TextField
label="password"
name="password"
id="password"
type="password"
variant="outlined"
value={values.password}
onChange={handleChange}
onBlur={handleBlur}
helperText={touched.password && errors.password}
error={touched.password && Boolean(errors.password)}
required
/> */


//   const [showPassword, setShowPassword] = useState(false);
//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

  /* <FormControl
            variant="outlined"
            required
            name="password"
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl> */
