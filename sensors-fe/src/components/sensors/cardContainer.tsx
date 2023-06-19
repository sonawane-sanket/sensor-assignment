// Material UI
import { Grid, Paper } from '@mui/material';

// Application files
import SensorCard from './card';

// Utils
import { ISensor, ISensorListProps } from '../../utils/interfaces'
import { CONNECT, DISCONNECT } from '../../utils/consants';

const SensorsList = (props: ISensorListProps) => {
  const { sensors, submitMessage } = props;
  return (
    <>
      <Grid container spacing={2}>
        {Array.isArray(sensors) &&
          sensors.map((sensor: ISensor) => (
            <Grid item xs={12} md={12} lg={4} key={sensor.id}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 140,
                  borderRadius: 5
                }}
              >
                <SensorCard
                  sensor={sensor}
                  submitMessage={() => submitMessage(sensor.connected ? DISCONNECT : CONNECT, sensor.id)} />
              </Paper>
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default SensorsList;
