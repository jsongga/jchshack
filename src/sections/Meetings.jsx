import {Box, Grid, Link, Typography} from "@mui/material";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./Meetings.css";
import FlipCountdown from '@rumess/react-flip-countdown';

export default function Meetings() {

    const NEXT_MEETING = new Date("August 18, 2022 15:30:00")
    const DISPLAY_TEXT = [
        "Today at 3:30 pm",
        "Tomorrow after school",
        "in two days",
        "in three days",
        "this coming Thursday",
        "this coming Thursday",
        "in 6 days",
        "in a week"
    ]

    const daysTill = Math.floor((NEXT_MEETING.getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000));

    return <Grid container spacing={2} sx={{backgroundColor: "white", height: "80vh", alignItems: "center"}}>
        <Grid container item xs={6} justifyContent={"center"}>
            <Calendar calendarType={"US"}/>
        </Grid>
        <Grid item xs={6}>
            <Box padding={10} justifyContent={"left"} sx={{textAlign: "left"}}>
                <Typography variant={"inherit"} className={"heading"}>Our</Typography>
                <Typography variant={"inherit"} className={"heading spacing"}>Meetings</Typography>
                <Typography>Our next meeting is {DISPLAY_TEXT[Math.min(daysTill, DISPLAY_TEXT.length-1)]}</Typography>

                <Grid container justifyContent={"flex-start"}>
                    <Typography>and in</Typography>

                    <FlipCountdown
                        endAt={NEXT_MEETING.getTime()}
                        theme={"light"}
                        titlePosition={"bottom"}
                        hideYear
                        endAtZero
                        size={"extra-small"}
                    />
                </Grid>

                <Typography>Weekly Meetings on Thursdays in Mrs. Prabahar's Room (R.###)</Typography>
                <Link>School Map</Link>

            </Box>
        </Grid>
    </Grid>
}