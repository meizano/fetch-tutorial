/* Ajax Javascript murni */
function loadAjaxJS() {
    var data_file = "dispatcher/jsonakun.php";

    var http_request = new XMLHttpRequest();
    try {
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer Browsers
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // Ada masalah
                alert("Browser rusak!");
                return false;
            }
        }
    }

    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4) {
            // Fungsi JavaScript JSON.parse untuk parsing data JSON
            var jsonObj = JSON.parse(http_request.responseText);

            // Variabel jsonObj sekarang mengandung struktur data dan bisa
            document.getElementById("ID").innerHTML = jsonObj.akun[0][0];
            document.getElementById("Akun").innerHTML = jsonObj.akun[0][1];
            document.getElementById("Password").innerHTML = jsonObj.akun[0][2];
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}

function loadAjaxJSList() {
    var data_file = "dispatcher/jsonakun.php";

    var http_request = new XMLHttpRequest();
    try {
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer Browsers
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // Ada masalah
                alert("Browser rusak!");
                return false;
            }
        }
    }

    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4) {
            // Fungsi JavaScript JSON.parse untuk parsing data JSON
            var jsonObj = JSON.parse(http_request.responseText);

            // Variabel jsonObj sekarang mengandung struktur data dan bisa

            // for(var i = 0; i < jsonObj.akun.length; i++)
            for (var i in jsonObj.akun) {
                var nodetr = document.createElement("tr");

                for (var j in jsonObj.akun[i]) {
                    var nodetd = document.createElement("td");
                    var textnode = document.createTextNode(jsonObj.akun[i][j]);
                    nodetd.appendChild(textnode);
                    nodetr.appendChild(nodetd);
                }
                // Nilai yang dikembalikan adalah nodelist (array)
                // var tabel = document.getElementsByTagName("table");
                // Karena tabel merupakan array, digunakan indeks untuk mengakses yang pertama
                // tabel[0].appendChild(nodetr);
                // Jika menggunakan ID sudah pasti unik, satu data
                var tabelLogin = document.getElementById("tabelLogin");
                // Sehingga, tidak diperlukan indeks
                tabelLogin.appendChild(nodetr);
            }
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}

function loadAjaxJSNama() {
    var data_file = "dispatcher/jsonakunnama.php";

    var http_request = new XMLHttpRequest();
    try {
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer Browsers
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // Ada masalah
                alert("Browser rusak!");
                return false;
            }
        }
    }

    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4) {
            // Fungsi JavaScript JSON.parse untuk parsing data JSON
            var jsonObj = JSON.parse(http_request.responseText);

            // Variabel jsonObj sekarang mengandung struktur data dan bisa
            document.getElementById("AkunNama").innerHTML = jsonObj.akunnama[0][0];
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}
/* Ajax Javascript murni */
