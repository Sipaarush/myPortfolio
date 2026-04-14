"use client";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function NetworkGraph() {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr("width", 400)
      .attr("height", 300);

    const nodes = [{ id: "RSMA" }, { id: "IRS" }, { id: "UAV" }];
    const links = [
      { source: "RSMA", target: "IRS" },
      { source: "IRS", target: "UAV" },
    ];

    const sim = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(200, 150));

    const link = svg.selectAll("line")
      .data(links)
      .enter().append("line");

    const node = svg.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("r", 10);

    sim.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

  }, []);

  return <svg ref={ref}></svg>;
}