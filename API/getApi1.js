const getData = async()=>{

    const response = await fetch("https://node5.onrender.com/user/user",{
        method: "GET",
    })


    // console.log(response);
    const res = await response.json();
    console.log(res.data);

    let tbody = document.getElementById("tbody");

    res.data.forEach((data)=>{
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let statusTd = document.createElement("td");
        let delTd = document.createElement("td");
        let delBtn = document.createElement("button");
        delBtn.innerHTML = "Delete";
        delBtn.className = "btn btn-danger";
        delBtn.addEventListener("click",async()=>{
            // alert(data._id)
            const response2 = await fetch("https://node5.onrender.com/user/user/"+data._id,{
                method: "DELETE",
            })
            console.log(response2);
            tr.remove()
        })

        idTd.innerHTML = data._id
        nameTd.innerHTML = data.name;
        emailTd.innerHTML = data.email;
        ageTd.innerHTML = data.age;
        statusTd.innerHTML = data.isActive;

        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(ageTd);
        tr.appendChild(statusTd);
        tr.appendChild(delTd);
        delTd.appendChild(delBtn);
        tbody.appendChild(tr);
    })
    
}