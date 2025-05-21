import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Mui() {
    return (
        <>
            <Container style={{ backgroundColor: "blue", padding: 10 }} maxWidth="lg">
                <Stack style={{ backgroundColor: "#3E2723", padding: 20, borderRadius: 10 }} direction={"row"} spacing={2}>
                    <Button variant="contained" color='primary'>
                        primary
                    </Button>
                    <Button variant="contained" color="secondary">
                        secondary
                    </Button>
                    <Button variant="outlined" color="primary">
                        primary
                    </Button>
                    <Button variant="outlined" color="secondary">
                        secondary
                    </Button>
                    <Checkbox color='success' {...label} defaultChecked />
                </Stack>
                <div style={{ width: "100%", height: 20 }}></div>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <h3 style={{ backgroundColor: "red", margin: 0 }}>size</h3>
                    </Grid>
                    <Grid size={4}>
                        <h3 style={{ backgroundColor: "red", margin: 0 }}>size</h3>
                    </Grid>
                    <Grid size={5}>
                        <h3 style={{ backgroundColor: "red", margin: 0 }}>size</h3>
                    </Grid>
                    <Grid size={3}>
                        <h3 style={{ backgroundColor: "red", margin: 0 }}>size</h3>
                    </Grid>
                    <Grid size={4}>
                        <h3 style={{ backgroundColor: "red", margin: 0 }}>size</h3>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}