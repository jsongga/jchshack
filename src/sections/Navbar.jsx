import {AppBar, Button, createTheme, Grid, ThemeProvider, Toolbar, Typography, useScrollTrigger} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: '#ff8c37',
        },
        background: {
            main: 'transparent'
        }
    },
});

const scrollTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: '#ff8c37',
        },
        background: {
            main: '#ffffff'
        }
    },
});

export default function Navbar() {


    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return <ThemeProvider theme={trigger ? scrollTheme : theme}>
        <AppBar color={"background"}>
            <Toolbar sx={{backgroundColor: trigger ? "white" : "transparent"}}>
                {/*<Box container justifyContent={"space-between"}></Box>*/}
                <Typography flexGrow={1}>JCHS Hack Club</Typography>

                <Grid>
                <Button>Meetings</Button>
                <Button>Our Projects</Button>

                <Button variant={"outlined"} sx={{margin: "0 0 0 1rem"}}>Sign Up</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    </ThemeProvider>
}