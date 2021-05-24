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
import { Link , useLocation} from 'react-router-dom'

import logo from "../../assets/logo-x.png";
import useStyles from "./styles";

const Navbar = ({ totalitems }) => {
  const classes = useStyles();
  const location = useLocation()


  return (
    <div>
      <AppBar position="fixed" className={classes.AppBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce"
              height="25px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                arial-label="Show cart item"
                color="inherit"
              >
                <Badge badgeContent={totalitems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
