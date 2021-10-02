import { Container, Filler, Label} from './ProgressBar.styles';

const ProgressBar = ({ width }) => {
    return (
        <Container>
            <Filler style={{width: `${width}%`}}>
                {/*<Label>{`${width}%`}</Label>*/}
            </Filler>
        </Container>
    );
}

export default ProgressBar;