import { Chart } from "@/components/ui/chart"
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

  // Initialize popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl))

  // Handle sidebar toggle for mobile
  const sidebarToggle = document.getElementById("sidebarToggle")
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      document.body.classList.toggle("sidebar-toggled")
      document.querySelector(".sidebar").classList.toggle("toggled")
    })
  }

  // Add active class to current nav item
  const currentLocation = window.location.pathname
  const navLinks = document.querySelectorAll(".sidebar .nav-link")
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active")
    }
  })

  // Form validation
  const forms = document.querySelectorAll(".needs-validation")
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add("was-validated")
      },
      false,
    )
  })

  // Attendance marking functionality
  const attendanceForm = document.getElementById("attendanceForm")
  if (attendanceForm) {
    const markAllPresentBtn = document.getElementById("markAllPresent")
    if (markAllPresentBtn) {
      markAllPresentBtn.addEventListener("click", () => {
        const statusSelects = document.querySelectorAll('select[name^="status_"]')
        statusSelects.forEach((select) => {
          select.value = "present"
        })
      })
    }
  }

  // Date range picker initialization for reports
  const dateRangePicker = document.getElementById("dateRangePicker")
  if (dateRangePicker && typeof daterangepicker !== "undefined" && typeof moment !== "undefined") {
    new daterangepicker(dateRangePicker, {
      opens: "left",
      drops: "down",
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")],
      },
    })
  }

  // Chart initialization for dashboard
  const attendanceChart = document.getElementById("attendanceChart")
  if (attendanceChart && typeof Chart !== "undefined") {
    new Chart(attendanceChart, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Attendance Percentage",
            data: [85, 88, 92, 90, 87, 89, 91, 93, 90, 88, 86, 89],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
            min: 70,
            max: 100,
          },
        },
      },
    })
  }

  // Data table initialization
  const dataTables = document.querySelectorAll(".data-table")
  if (dataTables.length > 0 && typeof $.fn.DataTable !== "undefined" && typeof $ !== "undefined") {
    dataTables.forEach((table) => {
      $(table).DataTable({
        responsive: true,
        pageLength: 10,
        lengthMenu: [
          [10, 25, 50, -1],
          [10, 25, 50, "All"],
        ],
      })
    })
  }
})
