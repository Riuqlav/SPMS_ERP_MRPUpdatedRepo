// library imports
import React, { useState, useEffect } from "react";

// material ui imports
import { Grid, Switch } from "@material-ui/core";

const DarkMode = ({ onChange }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    onChange(darkMode);
  }, [darkMode]);

  return (
    <Grid container alignItems="center">
      <Grid item>Light</Grid>
      <Grid item>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Grid>
      <Grid item>Dark</Grid>
    </Grid>
  );
};

export default DarkMode;