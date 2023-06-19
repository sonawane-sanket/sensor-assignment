// Material UI
import { Grid, Paper } from '@mui/material';

// Application files
import Chart from './chart';

// Utils
import { ISensorGraphProps } from "../../utils/interfaces";

const SensorGraph = (props: ISensorGraphProps) => {
  const { activeSensors } = props;

  return (
    <Grid item xs={12} md={12} lg={12} mt={5}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 240,
        }}
      >
        <Chart data={activeSensors} />
      </Paper>
    </Grid>
  )
}

export default SensorGraph