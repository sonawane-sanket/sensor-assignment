import { BLACK, SENSORS, WS_SERVER_URL } from "./consants";

// const socket = useRef(new WebSocket(WS_SERVER_URL)).current;
export const socket = new WebSocket(WS_SERVER_URL);

export const getSensorConfig = (name: string) => {
  switch (name) {
    case SENSORS.Temperature.name:
      return SENSORS.Temperature;
    case SENSORS.Humidity.name:
      return SENSORS.Humidity;
    case SENSORS.Pressure.name:
      return SENSORS.Pressure;
    case SENSORS['PM2.5'].name:
      return SENSORS['PM2.5'];
    case SENSORS.PM10.name:
      return SENSORS.PM10;
    case SENSORS.Wind.name:
      return SENSORS.Wind;
    default:
      return { name: '', goodIndex: 0, color: BLACK };
  }
}

export const getThreasholdColor = (value: number, name: string) => {
  return !value ? 'inherit' : (value > getSensorConfig(name).goodIndex && 'error') || 'primary';
}

export const isNonEmptyArray = (arr: Array<any>) => Array.isArray(arr) && arr.length > 0;