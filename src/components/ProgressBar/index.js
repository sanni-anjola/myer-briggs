import { Container, Filler} from './ProgressBar.styles';

const ProgressBar = ({ width, color }) => {
    return (
        <Container>
            <Filler style={{width: `${width}%`, background: color}}>
            </Filler>
        </Container>
    );
}

ProgressBar.defaultProps = {
    color: 'var(--semicolonRed)'
}

export default ProgressBar;