fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        var table = document.getElementById("table");
        for (var r = 0; r < table.rows.length; r++) {
            document.getElementsByClassName("icon")[r].src = data[r].icon;
            document.getElementsByClassName("category")[r].textContent = data[r].category;
            document.getElementsByClassName("score")[r].prepend(data[r].score);
        }
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data[i].score;
        }
        const average = Math.round(total / data.length);
        document.getElementById("average").textContent = average;
        

    })
    .catch(error => console.error('Error:', error));
