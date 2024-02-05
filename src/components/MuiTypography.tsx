import React from 'react';
import {Typography} from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      
      <Typography variant="subtitle1">Subtitle1</Typography>
      <Typography variant="subtitle2">Subtitle1</Typography>
      
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laborum perferendis quas reiciendis reprehenderit! Ad excepturi id magni quae, quia saepe sapiente sed tempore voluptatum! Consectetur eum laboriosam repellat voluptatem.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, amet architecto commodi cumque debitis dolorum enim est eum eveniet harum ipsam, iure laborum molestiae pariatur quia, quibusdam sequi veritatis voluptate.
      </Typography>
    </div>
  );
};

export default MuiTypography;