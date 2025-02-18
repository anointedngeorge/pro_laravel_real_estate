import React, { useEffect, useRef } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend
);

const ChartComponent = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            new ChartJS(canvasRef.current.getContext("2d"), {
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                        {
                            label: "Sales",
                            data: [30, 45, 28, 50, 75, 60],
                            borderColor: "#4CAF50",
                            backgroundColor: "rgba(76, 175, 80, 0.2)",
                            borderWidth: 2,
                            pointRadius: 5,
                            pointBackgroundColor: "#4CAF50",
                            tension: 0.4,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top",
                            labels: {
                                font: {
                                    size: 14,
                                    weight: "bold",
                                },
                                color: "#333",
                            },
                        },
                    },
                    scales: {
                        x: {
                            type: "category",
                            grid: {
                                display: false,
                            },
                            ticks: {
                                color: "#666",
                                font: {
                                    size: 12,
                                },
                            },
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: "#ddd",
                                borderDash: [5, 5],
                            },
                            ticks: {
                                color: "#666",
                                font: {
                                    size: 12,
                                },
                            },
                        },
                    },
                },
            });
        }
    }, []);

    return (
        <div style={{ width: "100%", height: "400px", padding: "20px", background: "#fff" }}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default ChartComponent;
