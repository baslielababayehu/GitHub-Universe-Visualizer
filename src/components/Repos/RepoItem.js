import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import FolderIcon from "@material-ui/icons/Folder";

export const RepoItem = ({ repo }) => {
  // useEffect(() => {
  //   returnLanguages();
  //   //eslint-disable-next-line
  // }, []);
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  // const returnLanguages = async () => {
  //   const res = await axios
  //     .get(repo.languages_url)
  //     .then((response) => response)
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   console.log(res);
  // };

  return (
    <div className={classes.root}>
      <div className="col-12 border ">
        <div className={classes.demo}>
          <List dense={dense}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={repo.name}
                secondary={secondary ? "Secondary text" : null}
              />{" "}
              <a href={repo.html_url}>Link</a>
              <IconButton edge="end" aria-label="delete"></IconButton>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default RepoItem;
