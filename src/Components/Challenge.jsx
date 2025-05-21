import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Collapse, Container, Grow, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
export default function Challenge() {
    const [open, setOpen] = useState(false)
    // let heightSize = open == true ? 200 : 50
    return (
        <>
            <Container maxWidth="lg">
                <Accordion style={{ backgroundColor: "#9E9E9E" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        hi according1
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ backgroundColor: "#9E9E9E" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Switch color='secondary' onClick={() => open == true ? setOpen((p) => !p) : setOpen((p) => !p)} checked={open} />
                    </AccordionDetails>
                </Accordion>
                <Grow in={open} timeout={400}>
                    <div style={{ backgroundColor: "#ef5350", width: "100%", height: 200, marginTop: 20 }}></div>
                </Grow>
            </Container>
        </>
    )
}