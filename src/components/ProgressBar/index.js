import { Container, Filler, Label} from './ProgressBar.styles';

const ProgressBar = ({ width, color }) => {
    return (
        <Container>
            <Filler style={{width: `${width}%`, backgroundColor: color}}>
                {/*<Label>{`${width}%`}</Label>*/}
            </Filler>
        </Container>
    );
}

ProgressBar.defaultProps = {
    color: 'var(--semicolonRed)'
}

export default ProgressBar;