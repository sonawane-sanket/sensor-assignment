export interface ISensorListProps {
  sensors: Array<ISensor>
  submitMessage: Function
}

export interface ISensorGraphProps {
  activeSensors: Array<IActiveSensors>
}

export interface ISensor {
  id: number | string,
  name: string,
  connected: boolean,
  unit: string,
  value: number
  prev?: string | number
  dt?: string | number
}

export interface ISensorCard {
  sensor: ISensor,
  submitMessage: Function
}

export interface IContextType {
  isActiveSensor: boolean,
};

export interface IActiveSensors {
  [key: string]: string | number
}

export type Error = {
  message: string
}

export interface ISensorValueRange {
  value: number | string | any,
  name: string
}

export interface IChart {
  data: Array<IActiveSensors>
}

export interface TitleProps {
  children?: React.ReactNode;
  style?: Object;
}

export interface ISensorsComp {
  getSensors: Function,
  submitMessage: Function,
  activeSensors: Array<IActiveSensors>
}