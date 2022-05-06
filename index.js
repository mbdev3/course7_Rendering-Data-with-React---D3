import React, {
  useState,
  useCallback,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import { csv, arc,pie } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;

const csvUrl =
  'https://gist.githubusercontent.com/mbdev3/056e2a5e2db68374e50b60c3226d0c21/raw/18fdc7dc5051225e80437bbb3452119e56dd6716/CSSNamedcolors.csv';

const pieArc = arc()
  .innerRadius(0)
  .outerRadius(width);

const App = () => {
  const [data, setData] = useState(null);

  // With d3.csv
  useEffect(() => {
    // d3.csv(csvUrl).then((data) => {
    //   console.log('data');
    //   setData(data);
    // });
    csv(csvUrl).then(setData);
  }, []);
  if (!data) {
    return <pre>{'loading...'}</pre>;
  }
  console.log(data[0]);
  const colorPie = ()=>{
  return pie().value(1)}
  return (
    <svg width={width} height={height}>
      <g
        transform={`translate(${centerX},${centerY})`}
      >
        {
//           data.map((d, i) => {
//           const { ['RGB hex value']: color } = d;

//           return (
//             <path
//               fill={color}
//               d={pieArc({
//                 startAngle: (i / data.length) * 2 * Math.PI ,
//                 endAngle:(i+1) / data.length * 2 * Math.PI ,
//               })}
//             />
//           );
//         })
        }
         {colorPie()(data).map((e) => {
          const { ['RGB hex value']: color } = e;

          return (
            <path
              fill={e.data["RGB hex value"]}
              d={pieArc(e)}
            />
          );
        })}
      </g>
    </svg>
  );
};

const rootElement = document.getElementById(
  'root'
);
ReactDOM.render(<App />, rootElement);
