// Material UI
import Typography from '@mui/material/Typography';

// Utils
import { TitleProps } from '../../utils/interfaces';

const Title = (props: TitleProps) => (
  <Typography component="h2" variant="h6" color="primary" gutterBottom style={props.style}>
    {props.children}
  </Typography>
);

export default Title;