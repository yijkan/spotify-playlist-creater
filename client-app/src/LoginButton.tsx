import React from 'react';
import { Button } from '@material-ui/core';

export default function LoginButton() {
  const handleClick = () => {
  }

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      disableElevation
    >
      Log in to Spotify!
    </Button>
  )
}