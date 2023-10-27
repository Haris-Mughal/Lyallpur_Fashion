import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "0.4em",
    borderColor: "grey",
    "& fieldset": {
      borderColor: "transparent", // Set border color to transparent
      transition: "border-color 0.3s", // Add transition effect
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Set border color to transparent on hover
    },
  },
  "& input": {
    color: "black",
    padding: "0.2em 1em ",
    height: "3em",
    width: "100%",
  },
  width: "100%",
}));
const CustomTextFieldComponent = (props) => {
  return (
    <CustomTextField
      variant="outlined"
      value={props.searchprop}
      onChange={(event) => {
        props.setSearchprop(event.target.value);
      }}
      id="standard-textarea"
      placeholder="Find Your Favourites"
      size="large"
      InputProps={{
        endAdornment: (
          <SearchIcon
            style={{ color: "black", fontSize: "1.75em", cursor: "pointer" }}
          />
        ),
      }}
      InputLabelProps={{
        shrink: true, // This prevents label from floating on focus
      }}
    />
  );
};

export default CustomTextFieldComponent;
