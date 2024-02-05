import React from 'react';
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="unsplash"
        >
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">React</Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;