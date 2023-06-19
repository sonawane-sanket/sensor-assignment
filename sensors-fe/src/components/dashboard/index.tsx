// React
import { useState, useEffect, createContext } from "react";

// Material UI
import { Box, Typography, Container, FormGroup, Switch } from '@mui/material';

// Date functions
import moment from "moment";

// Application files
import SensorsDashboard from "../sensors";

// Utils
import { ISensor, IActiveSensors, IContextType } from "../../utils/interfaces";
import { BLACK, DATE_FORMAT, TITLE } from "../../utils/consants";
import { isNonEmptyArray, socket } from "../../utils/helpers";
import Header from "../common/header";

export const Context = createContext<IContextType>({ isActiveSensor: false });

const Dashboard = () => {
  const activeSensorsList: Array<IActiveSensors> = [];
  const [activeSensors, setActiveSensors] = useState<IActiveSensors[]>([]);
  const [sensors, setSensors] = useState<ISensor[]>([]);
  const [showConnectedSensorsOnly, setShowConnectedSensorsOnly] = useState<boolean>(false);

  const { NO_ACTIVE_SENSORS, SHOW_CONNECTED_SENSORS } = TITLE


  const getSensors = () => showConnectedSensorsOnly ? sensors.filter(sensor => sensor.connected) : sensors

  const noActiveSensors = getSensors().length === 0;

  useEffect(() => {
    startSocketCommunication();

    socket.onopen = () => console.log("Connected to the server");

    socket.onclose = () => console.log("Disconnected.");

  }, []);

  const prepareSensorsList = (sensor: ISensor) => {
    const sensorInd = sensors.findIndex((msg: ISensor) => msg.id === sensor.id);
    if (sensorInd !== -1) {
      sensors[sensorInd] = sensor;
    } else {
      sensors.push(sensor);
    }
    setSensors([...sensors]);
  }

  const prepareActiveSensors = (sensor: ISensor) => {
    if (sensor.connected) {
      const dt = moment().format(DATE_FORMAT.HH_MM_SS);
      const ind = activeSensorsList.findIndex((item: IActiveSensors) => item.dt === dt)
      if (ind === -1) {
        activeSensorsList.push({ dt, [sensor.name]: sensor.value });
      } else {
        activeSensorsList[ind][sensor.name] = sensor.value;
      }
      setActiveSensors(activeSensorsList);
    }
  }

  const startSocketCommunication = () => {
    socket.onmessage = (e) => {
      const { data } = e;
      const sensor: ISensor = JSON.parse(data);
      prepareActiveSensors(sensor);
      prepareSensorsList(sensor);
    };
  }

  const submitMessage = (command: string, id: string) => {
    socket.send(JSON.stringify({ command, id }));
  };

  const isActiveSensor = isNonEmptyArray(sensors) && sensors.findIndex(sensor => sensor.connected) !== -1;

  return (
    <Context.Provider
      value={{ isActiveSensor }}
    >
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
            <FormGroup>
              <label>{SHOW_CONNECTED_SENSORS}</label>
              <Switch sx={{ textAlign: 'right' }} checked={showConnectedSensorsOnly} onChange={() => setShowConnectedSensorsOnly(!showConnectedSensorsOnly)} name="show" />
            </FormGroup>
            {
              noActiveSensors ?
                <Typography mt={5} component="h2" variant="h6" color="primary" gutterBottom style={{ color: BLACK, textAlign: 'center' }}>
                  {NO_ACTIVE_SENSORS}
                </Typography> :
                <SensorsDashboard getSensors={getSensors} submitMessage={submitMessage} activeSensors={activeSensors} />
            }

          </Container>
        </Box>
      </Box>
    </Context.Provider>
  )
}

export default Dashboard 