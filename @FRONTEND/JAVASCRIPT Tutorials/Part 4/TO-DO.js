let todo = [];

let req=prompt("Enter your Request!");

while(true){

    if(req=="quit")

    {
         console.log("Quitting Todo App!");
         break;
    }

    if(req=="list")

    {
        console.log("-----------");
        for (i=0;i<todo.length;i++)

        {
            console.log(i,todo[i]);
        }

        console.log("-----------");
    }

    else if(req=="add")

    {
        let task=prompt("Enter task to add into todo app!");
        todo.push(task);
        console.log("Task Added!");
    }

    else if(req== "delete")

    {
        let idx=prompt("Enter index to delete task");
        todo.splice(idx,1);
        console.log("Task deleted");
    }
    
    else

    {
        console.log("Wrong Request!");
    }

    req=prompt("Enter Another Request!");
}