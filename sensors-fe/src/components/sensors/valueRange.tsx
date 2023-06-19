// Material UI
import { Box, LinearProgress } from '@mui/material';

// Utils
import { getThreasholdColor } from '../../utils/helpers';
import { ISensorValueRange } from '../../utils/interfaces';

const SensorValueRange = (props: ISensorValueRange) => {
  const { value, name } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress sx={{ height: '0.3rem' }} color={getThreasholdColor(value, name)} variant="determinate" value={value} />
      </Box>
    </Box>
  );
}

export default SensorValueRange;