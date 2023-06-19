export const WS_SERVER_URL = "ws://localhost:5000/";

export const DATE_FORMAT = {
  HH_MM_SS: 'hh:mm:ss A'
}

export const [CONNECT, DISCONNECT] = ['connect', 'disconnect']

export const [BLACK, ORANGE, LIGHT_MAGENTA, MAROON, BLUE, OLIVE, PURPLE] = ["#000000", "#FFA500", "#8884d8", "#800000", "#0000FF", "#808000", "#800080"]

export const SENSORS = {
  Temperature: { name: "Temperature", color: ORANGE, goodIndex: 15.6 },
  Pressure: { name: "Pressure", color: LIGHT_MAGENTA, goodIndex: 101.7 },
  Humidity: { name: "Humidity", color: MAROON, goodIndex: 45.5 },
  "PM2.5": { name: "PM2.5", color: BLUE, goodIndex: 50.5 },
  PM10: { name: "PM10", color: OLIVE, goodIndex: 43.5 },
  Wind: { name: "Wind", color: PURPLE, goodIndex: 7.5 },
}

export const TITLE = {
  HEADER: 'Sensors - Internet of Things (IoT)',
  NO_GRAPH: 'No Graph data available',
  NO_ACTIVE_SENSORS: 'No Active Sensors !',
  SHOW_CONNECTED_SENSORS: 'Show Connected sensors only',
}