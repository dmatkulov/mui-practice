import React, {useState} from 'react';
import {Box, TextField, MenuItem} from '@mui/material'

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    <Box width="250px">
      <TextField label="Select country" select value={countries}
                 onChange={handleChange}
                 size="small"
                 fullWidth
                 SelectProps={{multiple: true}}
                 helperText="Please select your country"
                 // error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;