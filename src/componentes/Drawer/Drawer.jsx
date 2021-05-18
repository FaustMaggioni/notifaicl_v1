import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    }
});

const DrawerLeft = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["faiweb", "pedco"].map((text, index) => (
                    <ListItem key={text}>
                        <a href={`#${text}`} className={classes.link}>
                            <ListItemText primary={text.toUpperCase()} color='textPrimary' />
                        </a>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <Button onClick={toggleDrawer("left", true)}>
                    <ListIcon></ListIcon>
                </Button>
                <Drawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                >
                    {list("left")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default DrawerLeft