import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Resultados = (resultados) => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Preparar los datos
    const opciones = ["Opción A", "Opción B", "Opción C", "Opción D"];
    const datos = opciones.map((opcion) => {
      const conteo = resultados.filter((r) => r.respuesta === opcion).length;
      return { opcion, conteo };
    });

    // Configurar la gráfica
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const x = d3.scaleBand().range([0, width]).domain(opciones).padding(0.1);

    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(datos, (d) => d.conteo)]);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));

    svg
      .selectAll(".bar")
      .data(datos)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.opcion))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d.conteo))
      .attr("height", (d) => height - y(d.conteo));
  }, [resultados]);

  return (
    <>
      <h2>Resultado</h2>
      <avg ref={svgRef} />
    </>
  );
};

export default Resultados;
