/* Ajax jQuery */
function loadAjaxJQ() {
    $.ajax({
        type: 'POST',
        url: "dispatcher/jsonakun.php",

        dataType: 'json',
        success: function (feed) {
            document.getElementById("ID").innerHTML = feed.akun[1][0];
            document.getElementById("Akun").innerHTML = feed.akun[1][1];
            document.getElementById("Password").innerHTML = feed.akun[1][2];
        },
    });
}

function loadAjaxJQList() {
    $.ajax({
        type: 'POST',
        url: "dispatcher/jsonakun.php",

        dataType: 'json',
        success: function (feed) {
            for (var i = 0; i < feed.akun.length; i++) {
                $("table#tabelLogin").append(
                    "<tr><td>" + feed.akun[i][0] +
                    "</td><td>" + feed.akun[i][1] +
                    "</td><td>" + feed.akun[i][2] +
                    "</td></tr>");
            }
        },
    });
}

function loadAjaxJQListEach() // Alternatif untuk mengakses array (key -> value) bertingkat
{
    $.ajax({
        type: 'POST',
        url: "dispatcher/jsonakun.php",

        dataType: 'json',
        success: function (feed) {
            $.each(feed, function (key, value) {
                // alert(key + ": " + value);
                $.each(value, function (index, element) {
                    // alert(index + ": " + element[0]);
                    $("table#tabelLogin").append(
                        "<tr><td>" + element[0] +
                        "</td><td>" + element[1] +
                        "</td><td>" + element[2] +
                        "</td></tr>");
                });


            });
        },
    });
}

function loadAjaxJQNama() {
    $.ajax({
        type: 'POST',
        url: "dispatcher/jsonakunnama.php",

        dataType: 'json',
        success: function (feed) {
            document.getElementById("AkunNama").innerHTML = feed.akunnama[1][0];
        },
    });
}
/* Ajax jQuery */
