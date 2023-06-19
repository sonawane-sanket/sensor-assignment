// Application files
import SensorsList from "./cardContainer";
import SensorGraph from "./chartContainer";

// Utils
import { ISensorsComp } from "../../utils/interfaces";

const SensorsDashboard = (props: ISensorsComp) => {
  const { getSensors, submitMessage, activeSensors } = props
  return (
    <>
      <SensorsList sensors={getSensors()} submitMessage={submitMessage} />
      <SensorGraph activeSensors={activeSensors} />
    </>
  )
}

export default SensorsDashboard 