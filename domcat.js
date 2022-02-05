function LeaveXML() {
    var renXml = new XMLHttpRequest();
  
    console.log(renXml.readyState);
  
    renXml.onreadystatechange = function () {
      console.log(renXml.readyState);
      if (this.readyState == 4 && this.status == 200) {
        Leaveinfo(this);
      }
    };
  
    renXml.open("GET", "NewFile2.xml", "TRUE");
  
    renXml.send();
  }
  
  var xmlDoc;
  var table;
  var x;
  
  function Leaveinfo(info) {
    var i;
    xmlDoc = info.responseXML;
    displayTable(xmlDoc);
  }
  function displayTable(xmlDoc) {
    table = `<thead><tr>
            <th>NAME</th>
           <th>UNIVERSITY</th>
           <th>PHONE</th>
           <th>EMAIL</th>
          </tr></thead>`;
  
    x = xmlDoc.getElementsByTagName("Leave");
  
    for (i = 0; i < x.length; i++) {
      table +=
        "<tr><td>" +
        x[i].getElementsByTagName("STU_NAME")[0].childNodes[0].nodeValue +
        "</td><td data-label='Date'>" +
        x[i].getElementsByTagName("STU_UNIVERSITY")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("STU_PHONE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("STU_EMAIL")[0].childNodes[0].nodeValue +
        "</td><td>" +
        "<button onclick='removecus()'> remove </button></td></tr>";
    }
    document.getElementById("STU_INFO").innerHTML = table;
  }
  