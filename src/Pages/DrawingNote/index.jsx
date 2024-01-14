import { SketchField, Tools } from 'react-sketch';

const DrawingNote = () => {



    return (
        <div>
            <SketchField
                width={800}
                height={600}
                tool={Tools.Pencil}
                lineColor='black'
                lineWidth={3}
                onChange={handleSketchChange}
            />
        </div>
    )
}

export { DrawingNote }
