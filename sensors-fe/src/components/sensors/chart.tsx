// Material UI
import { useTheme } from '@mui/material/styles';

// Charts
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts';

// Application files
import Title from '../common/title';

// Utils
import { BLACK, TITLE, SENSORS } from '../../utils/consants';
import { getSensorConfig, isNonEmptyArray } from '../../utils/helpers';
import { IChart } from '../../utils/interfaces';
import { useContext } from 'react';
import { Context } from '../dashboard';

export default function Chart(props: IChart) {
  const { data } = props;
  const theme = useTheme();
  const { isActiveSensor } = useContext(Context);

  return (
    <>
      {
        isNonEmptyArray(data) ?
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              key={new Date().getTime()}
              data={data}
              margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="dt"
                stroke={theme.palette.text.secondary}
                style={theme.typography.body2}
              />
              <YAxis
                stroke={theme.palette.text.secondary}
                style={theme.typography.body2}
              >
                <Label
                  angle={270}
                  position="left"
                  style={{
                    textAnchor: 'middle',
                    fill: theme.palette.text.primary,
                    ...theme.typography.body1,
                  }}
                >
                  Values
                </Label>
              </YAxis>
              {
                Object.keys(SENSORS).map((name: string) => {
                  return (
                    <Line
                      key={name}
                      isAnimationActive={false}
                      type="monotone"
                      dataKey={name}
                      stroke={getSensorConfig(name).color}
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 8 }}
                    />
                  )
                })
              }
              {!isActiveSensor && <Tooltip />}
              <Legend />
            </LineChart>
          </ResponsiveContainer > :
          <Title style={{ color: BLACK, textAlign: 'center' }}>
            {TITLE.NO_GRAPH}
          </Title>
      }
    </>
  );
}