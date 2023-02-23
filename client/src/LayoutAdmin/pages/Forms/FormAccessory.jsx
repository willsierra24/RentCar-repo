import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Widget } from "@uploadcare/react-widget";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { createTheme } from "@mui/material/styles";
import "./Form.css";
import { Link } from "react-router-dom";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Button,
} from "@mui/material";
import { postAccessories } from "../../../redux/actions/actions";

export const FormAccessory = () => {
  const dispatch = useDispatch();
  const onFileSelect = (file) => {
    console.log("File changed: ", file);
    if (file) {
      file.done((info) => console.log("File uploaded: ", info));
    }
  };
  const uploadFileSelect = (file) => {
    if (!file) {
      console.log("File removed from widget");
    }
    file.done((fileInfo) => {
      setValues.image(fileInfo.originalUrl);
      console.log("done");
    });
  };

  const {
    errors,
    touched,
    getFieldProps,
    values,
    setValues,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      price: 0,
      description: "",
      image: "",
      status: "valid",
      discount: 0,
      quantity: 1,
    },
    validationSchema: Yup.object({
      name: Yup.string("Enter the accessory")
        .min(3, "Min. 3 characters")
        .max(50, "Max. 50 characters")
        .required("Name is required"),
      price: Yup.number()
        .positive("Price must be greater than zero")
        .required("Price is required"),
      description: Yup.string()
        .min(10, "Min. 10 characters")
        .max(300, "Max. 300 characters")
        .required("Description is required"),
      image: Yup.string().required("Image is required"),
      status: Yup.string(),
      discount: Yup.number().moreThan(
        -1,
        "Discount must be greater or equal to zero"
      ),
      quantity: Yup.number()
        .moreThan(0, "Quantity must be greater than zero")
        .required("Quantity is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(postAccessories(values));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New accessesory has been created successfully",
        showConfirmButton: true,
      });
      resetForm({ values: "" });
    },
  });
  return (
    <>
      <Link to="/dashboard/accessories">
        <button
          type="button"
          className="absolute top-20 right-4 flex px-6 py-2.5 bg-primary text-[#023047] font-bold  text-xs leading-tight uppercase rounded shadow-md hover:bg-[#219EBC] hover:shadow-lg focus:bg-[#219EBC] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg  duration-150 ease-in-out"
        >
          Back
        </button>
      </Link>
      <div className="form_accessory">
        <label className="form_title">CREATE NEW ACCESSORY</label>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="name"
            value={values.name}
            type="text"
            variant="outlined"
            label="Name"
            margin="normal"
            onChange={handleChange}
            error={touched.name && errors.name ? true : false}
            helperText={
              touched.name && errors.name ? <span>{errors.name} </span> : false
            }
            {...getFieldProps("name")}
          />

          <TextField
            fullWidth
            name="price"
            value={values.price}
            type="number"
            varient="filled"
            min="0.00"
            max="10000.00"
            step="0.01"
            label="Price"
            margin="normal"
            onChange={handleChange}
            error={errors.price && touched.price ? true : false}
            helperText={
              errors.price && touched.price ? (
                <span>{errors.price} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("price")}
          />
          <TextField
            fullWidth
            name="description"
            value={values.description}
            multiline
            maxRows={10}
            margin="normal"
            label="Description"
            onChange={handleChange}
            error={errors.description && touched.description ? true : false}
            helperText={
              errors.description && touched.description ? (
                <span>{errors.description} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("description")}
          />
          <fieldset>
            <legend>Image</legend>
            <Widget
              // className="uploader"
              publicKey={"31565ad8e1a6027b4914"}
              name="image"
              value={values.image}
              previewStep
              clearable
              crop
              margin="normal"
              onChange={(e) => setFieldValue("image", e.originalUrl)}
              onFileSelect={onFileSelect}
              // {...getFieldProps('image')}
            />
            {touched.image && errors.image && (
              <span className="error">{errors.image}</span>
            )}
          </fieldset>
          <fieldset>
            <legend>Status </legend>
            <RadioGroup
              row
              name="status"
              value={values.status}
              style={{ marginLeft: "200px" }}
              onChange={handleChange}
            >
              <FormControlLabel
                value={"valid"}
                control={<Radio size="small" />}
                label="Valid"
              />
              <FormControlLabel
                value={"invalid"}
                control={<Radio size="small" />}
                label="Invalid"
              />
            </RadioGroup>
          </fieldset>
          <TextField
            fullWidth
            name="discount"
            value={values.discount}
            type="number"
            min="0"
            max="100"
            label="Discount"
            margin="normal"
            onChange={handleChange}
            error={touched.discount && errors.discount ? true : false}
            helperText={
              touched.discount && errors.discount ? (
                <span>{errors.discount} </span>
              ) : (
                false
              )
            }
          />
          <TextField
            fullWidth
            name="quantity"
            value={values.quantity}
            type="number"
            min="0"
            max="100"
            label="Quantity"
            margin="normal"
            onChange={handleChange}
            error={errors.quantity && touched.quantity ? true : false}
            helperText={
              touched.quantity && errors.quantity ? (
                <span>{errors.quantity} </span>
              ) : (
                false
              )
            }
            {...getFieldProps("quantity")}
          />
          <Button
            onClick={() => console.log("image", values.image)}
            color="primary"
            sx={{ backgroundColor: "#2F3E46" }}
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};
