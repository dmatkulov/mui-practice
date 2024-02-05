import React, {useState} from 'react';
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText} from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
const MuiCheckBox = () => {
  const [accept, setAccept] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  console.log({skills})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(accept)
    setAccept(e.target.checked)
  }
  
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    
    if (index === - 1) {
      setSkills([...skills, e.target.value])
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value))
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          control={<Checkbox icon={<BookmarkBorderIcon/>}
                             checkedIcon={<BookmarkIcon/>}
                             checked={accept}
                             onChange={handleChange}
          />}
          label="I accept terms and conditions"
        />
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon/>}
                  checkedIcon={<BookmarkIcon/>}
                  checked={accept}
                  onChange={handleChange}
        />
      </Box>
      
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="HTML"
              control={<Checkbox checked={skills.includes('HTML')} onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label="CSS"
              value="CSS"
              control={<Checkbox checked={skills.includes('CSS')} onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label="Js"
              value="Js"
              control={<Checkbox checked={skills.includes('Js')} onChange={handleSkillChange} />}
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;