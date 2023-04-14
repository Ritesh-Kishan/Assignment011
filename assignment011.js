fetch("https://6434f30f83a30bc9ad545d2d.mockapi.io/mockdata").then((data)=>{
    return data.json();  //data is converted to object format.
})
.then((objectData)=>{
    // console.log(objectData);
    let tbleData=" ";
    // map to go through each object.
    objectData.map((value)=>{
        tbleData+=`<tr>
            <td><input type="checkbox" class="check_box"></td>
            <td>${value.id}</td>
            <td>${value.createdAt}</td>
            <td>${value.name}</td>
            <td><img src='${value.avatar}'/></td>
        </tr>`;
    })
    document.getElementById("tblbdy").innerHTML=tbleData
})


// {/* <td><button class="buttons" id="deletebtn" onclick="ondelete()">DELETE</button></td> */}

// Catch statement.
.catch((err)=>{
    console.log(err);
})

// This is the working of the search bar.
function searchfn(){
    var tr, td, i, txtValue;
    var input = document.getElementById("for_search");
    var srchupper = input.value.toUpperCase();
    var tabledata = document.getElementById("tbl");
    tr = tabledata.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        // console.log(txtValue);

        if (txtValue.toUpperCase().indexOf(srchupper) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
      
      
    }
};


// This is the section of the buttons
const homebtn=document.getElementById("homebtn");
const staredbtn=document.getElementById("staredbtn");
const thrashbtn=document.getElementById("thrashbtn");


thrashbtn.addEventListener("click", function gotothrash(){
    window.open("http://127.0.0.1:5500/assignment011-1.html","_self");
});


staredbtn.addEventListener("click", function gotostared(){
    window.open("http://127.0.0.1:5500/assignment011-2.html","_self");
});


homebtn.addEventListener("click", function gotohome(){
    window.open("http://127.0.0.1:5500/assignment011.html","_self");
});

const table_body=document.getElementById("tblbdy");
const deletebtn=document.getElementById("deletebtn");


// deletebtn.addEventListener("onclick", 
function ondelete(){
    console.log(this)
    this.parentElement.style.display="none";
    console.log("hello");
};