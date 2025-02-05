let tasks = [
    {id:1,Name:'Trip Plan',discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, labore?',status:'running'},
    {id:2,Name:'Complete Assignments',discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, labore?',status:'running'}
];

function setToLocal(nobita){
localStorage.setItem('Batch50',JSON.stringify(nobita))
}

setToLocal(tasks);


function getFromLocal(){
    return JSON.parse(localStorage.getItem('Batch50'));
// console.log(getFromLocal);
// console.log(typeof(getFromLocal))
}

let getTaskFromLocal = getFromLocal()


function renderList(taskToRender){
document.getElementById('taskList').innerHTML = taskToRender.map((t)=>`
                                <tr>
            <th scope="row">${t.id}</th>
            <td>${t.Name}</td>
            <td>${t.discription}</td>
            <td>${t.status}</td>
            <td><button class='btn btn-danger' onclick=deleteTask(${t.id})>delete</button></td>
          </tr>
`).join('')
        }

function addNewTask(){
    name = document.getElementById('taskName').value
    discri = document.getElementById('taskDiscri').value
    status = document.getElementById('taskStatus').value
    newTask={
        id:Date.now(),
        Name:name,
        discription:discri,
        status:status
    }
    console.log(newTask)
    const getTaskFromLocal111 = getFromLocal()
    console.log(getTaskFromLocal111)
    getTaskFromLocal111.push(newTask)
    setToLocal(getTaskFromLocal111)
renderList(getFromLocal());


}

function deleteTask(ID){
    tasksForDelete = getFromLocal();
    console.log(tasksForDelete)

    index = tasksForDelete.findIndex(ts=>ts.id == ID)
    if(index == -1){
        alert('product not found')
    }else{
        tasksForDelete.splice(index,1)
        console.log(tasksForDelete)
    }
    setToLocal(tasksForDelete)
    renderList(getFromLocal());
}


renderList(getTaskFromLocal);