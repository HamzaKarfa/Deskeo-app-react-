import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';
import ListImage from './ListImage'



function Content() {
  const classes = useStyles();
  function Reload(){
    window.location.href = ""
  }
    return (
    <>
        <Paper className={classes.paper}>
          <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
              <Toolbar>
              <Grid container spacing={2} alignItems="center">
                  <Grid item xs>
                    <h3>Liste de toutes les images </h3>
                  </Grid>
                  <Grid item>
                  <Tooltip title="Reload">
                      <IconButton onClick={()=> Reload()}>
                        <RefreshIcon className={classes.block} color="inherit" />
                      </IconButton>
                  </Tooltip>
                  </Grid>
              </Grid>
              </Toolbar>
          </AppBar>
          <div className={classes.contentWrapper}>
              <ListImage/>
          </div>
        </Paper>
    </>
    );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    display:'flex',
    justifyContent:'center',
    margin: '40px 16px',
  },
}));


export default Content;