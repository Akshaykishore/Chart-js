var ctx = document.getElementById("myChart");
        var data = {
            labels: ["Vue js","Rx js","ReactJS","express","node","Mango"],
            datasets: [{
                label: "subjects",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "#355FFF",
                pointBackgroundColor: "#3385FF",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#3385FF",
                pointHoverBorderColor: "#3385FF",
                data: [90,80,60,80,95,60,75]
                }]
        };
        var myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                scale: {
                    responsive: true,
                    ticks: {min: 0, max: 100},
                    lineArc: false,
                    pointLabels: {fontSize: 14},
                },
                legend: {display: false},
            }
        }); 