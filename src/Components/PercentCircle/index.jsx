import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PercentCircle = ({
    textColor,
    pogress,
    bgColor,
    lineColor,
}) => {

    return (
        <CircularProgressbar
            value={pogress}
            text={`${pogress}%`}
            styles={buildStyles({
                rotation: 0.25,
                textSize: '1.3rem',
                pathTransitionDuration: 0.5,
                pathColor: lineColor,
                textColor: textColor ? textColor : '#000',
                trailColor: bgColor,
            })}
        />
    )
}

export { PercentCircle }