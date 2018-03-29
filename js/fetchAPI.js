/* fetch API */
//Fungsi untuk memudahkan buat Node
function createNode(element) {
    return document.createElement(element); // Membuat tipe elemen yang dilewatkan melalui parameter
}

//Fungsi untuk menambahkan sub node di bawah Node
function append(parent, el) {
    return parent.appendChild(el); // Append parameter kedua ke yang pertama
}

function loadFetchAPI() {
    url = 'dispatcher/jsonakun.php';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            document.getElementById("ID").innerHTML = data.akun[2][0];
            document.getElementById("Akun").innerHTML = data.akun[2][1];
            document.getElementById("Password").innerHTML = data.akun[2][2];
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}

function loadFetchAPIList() {
    url = 'dispatcher/jsonakun.php';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let tabel = document.querySelector("table#tabelLogin");
            data.akun.map(function (dt) {
                let tr = createNode('tr'),
                    td1 = createNode('td'),
                    td2 = createNode('td'),
                    td3 = createNode('td'); // memakai fungsi pembuat elemen
                td1.innerHTML = dt[0];
                td2.innerHTML = dt[1];
                td3.innerHTML = dt[2];
                append(tr, td1); // memakai fungsi append ke parameter pertama
                append(tr, td2);
                append(tr, td3);
                append(tabel, tr);
            })
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}

function loadFetchAPINama() {
    url = 'dispatcher/jsonakunnama.php';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            document.getElementById("AkunNama").innerHTML = data.akunnama[2][0];
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}
/* fetch API */
