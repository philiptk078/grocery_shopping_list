function grocery_list() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

            var Glist = response.list;

            var output = "<table>";
            for (var i = 0; i < Glist.length; i++) {

                output += "<tr> <td>" + Glist[i].sl_no + "</td><td>" +
                    Glist[i].name + "</td><td>" +
                    Glist[i].quantity + "</td><td>" +
                    Glist[i].unit + "</td><td>" +
                    Glist[i].department + "</td><td>" +
                    Glist[i].notes + "</td></tr>";
            }
            output += "</table>";
            document.getElementById("demo").innerHTML = output;


        }
    };
    xhttp.open("GET", "grocery_list.json", true);
    xhttp.send();
}