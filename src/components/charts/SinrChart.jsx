"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { load: 0.2, rsma: 12, normal: 8 },
  { load: 0.5, rsma: 18, normal: 11 },
  { load: 0.8, rsma: 25, normal: 14 },
];

export default function SinrChart() {
  return (
    <LineChart width={400} height={250} data={data}>
      <XAxis dataKey="load" />
      <YAxis />
      <Tooltip />
      <Line dataKey="rsma" stroke="#7c6af7" />
      <Line dataKey="normal" stroke="#22d4fd" />
    </LineChart>
  );
}