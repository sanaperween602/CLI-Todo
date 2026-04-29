import readline from "readline";

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const todos=[];

const showMenu =()=>{
    console.log("\n 1: Add a Task");
    console.log("2: View Task");
    console.log("3: Exit");
    r1.question("choose an option:",handleInput);
}


const handleInput =(option)=>{
    if(option==="1"){
        r1.question("Enter the Task:", (task)=>{
            todos.push(task);
            console.log("Task added:",task);
            showMenu()
        });
    }
    else if(option==="2"){
        console.log("\n  Your Todo List");
        todos.forEach((task , index)=> {
            console.log(`${index +1}.${task}`);
        });
        showMenu()
    }
    else if(option ==="3")
    {
        console.log('Good Byee');
        r1.close();
    }
    else{
        console.log("Invalid option .please try again");
        showMenu();
    }
}
showMenu();