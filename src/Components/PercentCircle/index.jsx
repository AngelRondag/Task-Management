import Circle from 'react-circle'

const PercentCircle = ({
    textColor,
    pogress,
    bgColor,
    lineColor,
    size,
}) => {

    return (
        <Circle
            animate={true}
            animationDuration="2s"
            lineWidth={35}
            size={size}
            progress={pogress}
            bgColor={bgColor}
            progressColor={lineColor}
            textStyle={{
                font: 'bold 5rem Helvetica, Arial, sans-serif'
            }}
            textColor={textColor ? textColor : 'black'}
            percentSpacing={10}
            roundedStroke={true}
            showPercentage={true}
            showPercentageSymbol={true}
        />
    )
}

export { PercentCircle }