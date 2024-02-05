import React, {useState} from 'react';
import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
  // const [formats, setFormats] = useState<string[]>([])
  const [formats, setFormats] = useState<string | null>(null)
  console.log({formats})
  const handleFormatChange = (e: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
    setFormats(updatedFormats)
  }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://www.google.com">Text</Button>
        <Button variant="contained">Container</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="text" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
      </Stack>
      
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon/>} disableRipple>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon/>} disableElevation onClick={() => alert('Hi')}>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon/>
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          disableElevation
          disableRipple
        
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold"><FormatBoldIcon/></ToggleButton>
          <ToggleButton value="italic"><FormatItalicIcon/></ToggleButton>
          <ToggleButton value="underlined"><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;