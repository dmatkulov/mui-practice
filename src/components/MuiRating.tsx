import React, {useState} from 'react';
import { Stack , Rating} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null)
  // const [value, setValue] = useState<number | null>(3)
  console.log(value)
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue)
  }
  
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.2}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="secondary"/> }
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
        // readOnly
        // highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;