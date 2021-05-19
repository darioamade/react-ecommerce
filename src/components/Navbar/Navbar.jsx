import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo-x.png";
import useStyles from "./styles";

const Navbar = ({ totalitems }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.AppBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="commerce"
              height="25px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton arial-label="Show cart item" color="inherit">
              <Badge badgeContent={totalitems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
