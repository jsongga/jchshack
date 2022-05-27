import {Box, Divider, Grid, Paper, Typography} from "@mui/material";
import "./Information.css";

export default function Information() {


    return <Grid container spacing={2} sx={{backgroundColor: "white", height: "80vh", alignItems: "center"}}>
        <Grid item xs={6}>
            <Box padding={10} justifyContent={"left"} sx={{textAlign: "left"}}>
                <Typography className={"heading"} variant={"inherit"}>What is</Typography>
                <Typography className={"heading spacing"} variant={"inherit"}>this club?</Typography>
                <Divider />
                <Typography marginTop={5}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box component={"img"} maxWidth={"80%"} src="https://www.fultonschools.org/cms/lib/GA50000114/Centricity/Domain/69/Website%20-%20Front%20of%20School.jpg"/>

        </Grid>
    </Grid>
}