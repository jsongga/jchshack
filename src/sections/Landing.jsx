import {Container, Typography} from "@mui/material";
import Typed from 'react-typed';
import {useEffect, useState} from "react";
import './Landing.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Landing() {
    const [cursorLevel, setCursorLevel] = useState(0);

    const handleDone = () => setCursorLevel(cursorLevel + 1);

    return (
        <Container className={"content-wrapper"}>
        <Container className={"head-div"} maxWidth={"xl"}>
            <Heading align={"left"} text={"This is"} level={0} cursorLevel={cursorLevel} onComplete={handleDone} className={"white-heading"}/>
            <Heading align={"center"} text={"JCHS"} level={1} cursorLevel={cursorLevel} onComplete={handleDone} className={"white-heading"}/>
            <Heading align={"right"} text={"Hack Club."} level={2} cursorLevel={cursorLevel} onComplete={() => {}} className={"orange-heading"}/>
        </Container>
        <KeyboardDoubleArrowDownIcon className={"down-arrow white-heading"}/>
        </Container>
)
}

function Heading(props) {
    const SPEED = 100;
    const [animation, setAnimation] = useState();

    useEffect(() => {
        if (animation === undefined) return;

        if (props.cursorLevel === props.level) animation.start();
        else animation.stop();

    }, [animation, props.cursorLevel, props.level])

    return <Typography align={props.align} variant={"h1"}>
        <Typed
            typedRef={(typed) => setAnimation(typed)}
            strings={[props.text]}
            typeSpeed={SPEED}
            showCursor={animation && animation.isPaused}
            cursorChar={"cdn"}
            onComplete={props.onComplete}
            className={"headings " + props.className}
        />
    </Typography>
}