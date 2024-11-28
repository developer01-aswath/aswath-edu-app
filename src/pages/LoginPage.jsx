import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  const handleLogin = (token, role, id) => {
    dispatch(login({ token, role, id }));
    navigate(`/${role}`);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Submit Handler
  const handleSubmit = async (values) => {
    try {
      const response = await apiClient.post("/auth/login", values);
      if (response.data.status) {
        const { token, role, id } = response.data;
        handleLogin(token, role, id);
      }
    } catch (error) {
      // Set the error message into Formik's status field
      setStatus(
        error.response?.data?.message || "An unexpected error occurred"
      );
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {status && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {status} {/* This will display the error message */}
          </Alert>
        )}
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            status,
          }) => (
            <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
              {status && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {status}
                </Alert>
              )}
              <TextField
                margin="normal"
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                margin="normal"
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default LoginPage;
