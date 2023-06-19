// Material UI
import { Typography, FormGroup, FormHelperText, Switch, Grid } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpeedIcon from '@mui/icons-material/Speed';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

// Application files
import Title from '../common/title';
import LinearWithValueLabel from './valueRange';

// Utils
import { SENSORS } from '../../utils/consants';
import { getThreasholdColor, getSensorConfig } from '../../utils/helpers';
import { ISensorCard } from '../../utils/interfaces';

const SensorCard = (props: ISensorCard) => {
  const { sensor: { name, connected, unit, value }, submitMessage } = props;

  const renderSensorIcon = (name: string) => {
    switch (name) {
      case SENSORS.Temperature.name:
        return <DeviceThermostatIcon color="primary" fontSize="large" />;
      case SENSORS.Humidity.name:
        return <WaterDropIcon color="primary" fontSize="large" />
      case SENSORS.Pressure.name:
        return <SpeedIcon color="primary" fontSize="large" />
      case SENSORS["PM2.5"].name:
        return <ScatterPlotIcon color="primary" fontSize="large" />
      case SENSORS.PM10.name:
        return <BubbleChartIcon color="primary" fontSize="large" />
      case SENSORS.Wind.name:
        return <AirIcon color="primary" fontSize="large" />
      default:
        return <></>
    }
  }

  return (
    <>
      <Grid container>
        <Grid item xs={10} md={10} lg={10}>
          <Title style={{ color: getSensorConfig(name).color }}>{name}</Title>
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          {renderSensorIcon(name)}
        </Grid>
      </Grid>
      <Typography component="p" variant="h6" align="center" color={getThreasholdColor(value, name)}>
        {`${value || 0} ${unit}`}
      </Typography>
      <Grid container>
        <Grid item xs={2} md={2} lg={2}>
        </Grid>
        <Grid item xs={4} md={9} lg={9}>
          <LinearWithValueLabel value={value} name={name} />
        </Grid>
      </Grid>
      <Grid container mt={2}>
        <Grid item xs={4} md={9} lg={9} />
        <Grid item xs={5} md={3} lg={3}>
          <FormGroup>
            <Switch checked={connected} onChange={() => submitMessage()} name={name} />
            <FormHelperText>{connected ? "Connected" : "Disconnected"}</FormHelperText>
          </FormGroup>
        </Grid>
      </Grid>
    </>
  );
}

export default SensorCard;