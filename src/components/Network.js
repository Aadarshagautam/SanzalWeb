import * as React from 'react';
import Graph from "react-graph-vis";
import { useState, useEffect} from 'react';

export default function Network() {
   
    const [data, setData] = useState([]);
    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch('https://raw.githubusercontent.com/nsuman/SanzalWeb/main/src/user_data.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };

    const nodes = []
    const edges = []
    if (data) {
        data.forEach(element => {
            nodes.push({
                id: element.username,
                label: element.name,
                size: Math.random() * 1000000000,
                shape: 'circle'
            })
        });
    }

  return (
    <div style={{width: '100%', height:'600px'}}>
  <Graph
    graph={{ nodes: nodes, edges: edges}}
  />
    </div>
  
  );
}