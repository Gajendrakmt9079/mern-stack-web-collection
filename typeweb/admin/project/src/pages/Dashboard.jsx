import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axiosInstance from '../backendApis/axiosInstance';

function Dashboard() {
  const revenueChartRef = useRef(null);
  const salesChartRef = useRef(null);
  const clientsChartRef = useRef(null);

  const revenueChartInstance = useRef(null);
  const salesChartInstance = useRef(null);
  const clientsChartInstance = useRef(null);

  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axiosInstance.get('/getallclients'); // Adjust route if needed
        setClients(response.data.data); // accessing `.data` inside `ApiResponse`
      } catch (error) {
        console.error('Error fetching clients:', error.response?.data || error.message);
        alert('Failed to fetch clients');
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    const createChart = (ref, instanceRef, type, label, data, color) => {
      if (ref.current) {
        const ctx = ref.current.getContext('2d');
        if (instanceRef.current) instanceRef.current.destroy();

        instanceRef.current = new Chart(ctx, {
          type,
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
              label,
              data,
              backgroundColor: color,
              borderColor: color,
              fill: type !== 'line' ? true : false,
              tension: type === 'line' ? 0.4 : undefined
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    };

    createChart(revenueChartRef, revenueChartInstance, 'bar', 'Revenue', [12000, 19000, 15000, 25000, 22000, 30000], '#3498DB');
    createChart(salesChartRef, salesChartInstance, 'line', 'Sales', [500, 700, 900, 800, 1200, 1400], '#2ECC71');
    createChart(clientsChartRef, clientsChartInstance, 'bar', 'Clients', [30, 45, 38, 60, 55, 70], '#E67E22');

    return () => {
      revenueChartInstance.current?.destroy();
      salesChartInstance.current?.destroy();
      clientsChartInstance.current?.destroy();
    };
  }, []);

  return (
    <>
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat-card">
          <h3 className="text-gray-500">Total Clients</h3>
          <p className="text-2xl font-bold">{clients.length}</p>
        </div>
        <div className="stat-card">
          <h3 className="text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold">₹42.8k</p>
        </div>
        <div className="stat-card">
          <h3 className="text-gray-500">Active vehicals</h3>
          <p className="text-2xl font-bold">478</p>
        </div>
        <div className="stat-card">
          <h3 className="text-gray-500">Good reviews</h3>
          <p className="text-2xl font-bold">84%</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 chart-container bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
          <canvas ref={revenueChartRef}></canvas>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-4">Project Status</h2>
          <div className="text-3xl font-bold">84%</div>
        </div>
      </div>

      {/* Sales & Clients Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="chart-container bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          <canvas ref={salesChartRef}></canvas>
        </div>
        <div className="chart-container bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Clients Overview</h2>
          <canvas ref={clientsChartRef}></canvas>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
