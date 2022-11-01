/** @format */

import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { TextField, Paper } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import useSelect from "./useSelect";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ArrowUp from "@mui/icons-material/KeyboardArrowUp";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuItem from "@mui/material/MenuItem";
interface Theme {
  background: string;
  color: string;
  spacing: string;
}
const useStyles = createUseStyles((theme) => ({
  root: {
    padding: 40,
    background: (theme: Theme) => theme.background,
    width: 400,
    margin: "10px auto",
    height: 300,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
}));
interface IProps {}
const Select = ({ ...props }: IProps): React.ReactElement => {
  const theme = useTheme<Theme>();
  const classes = useStyles(theme);
  const {
    isOpen,
    handleClick,
    options,
    handleClose,
    handleItemClick,
    handleChange,
    txtValue,
    handleEnter,
  } = useSelect();
  return (
    <Paper className={classes.root}>
      <ClickAwayListener onClickAway={handleClose}>
        <Paper className={classes.paper}>
          <TextField
            value={txtValue}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleEnter();
            }}
            variant="outlined"
            onClick={handleClick}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    {isOpen ? <ArrowUp /> : <ArrowDown />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Paper>
            {isOpen &&
              options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === txtValue}
                  onClick={(event) =>
                    handleItemClick(
                      event.currentTarget.textContent
                        ? event.currentTarget.textContent
                        : ""
                    )
                  }>
                  {option}
                </MenuItem>
              ))}
          </Paper>
        </Paper>
      </ClickAwayListener>
    </Paper>
  );
};
export default Select;
