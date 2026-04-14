"use client";

import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const data = [
  { skill: "RF", value: 90 },
  { skill: "MATLAB", value: 85 },
  { skill: "Embedded", value: 80 },
  { skill: "Antenna", value: 75 },
];

export default function RadarSkills() {
  return (
    <RadarChart outerRadius={100} width={300} height={300} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="skill" />
      <Radar dataKey="value" stroke="#7c6af7" fill="#7c6af7" fillOpacity={0.6} />
    </RadarChart>
  );
}