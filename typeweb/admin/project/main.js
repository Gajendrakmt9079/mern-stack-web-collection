import './style.css'
import Chart from 'chart.js/auto'

// Initialize the dashboard
function initDashboard() {
  const ctx = document.getElementById('revenueChart').getContext('2d')
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        backgroundColor: '#3498DB',
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
  })

  // Initialize circular progress
  const progress = document.querySelector('.progress-ring-circle')
  const radius = progress.r.baseVal.value
  const circumference = radius * 2 * Math.PI
  const percent = 84

  progress.style.strokeDasharray = `${circumference} ${circumference}`
  progress.style.strokeDashoffset = circumference - (percent / 100) * circumference
}

document.addEventListener('DOMContentLoaded', initDashboard)