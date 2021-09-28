const btn  = document.querySelector(".Ass3");


btn.onclick = () => {
    let student = {
        name1 : "AYUB", 
        rollNo: 10, 
        class1: "D15A", 
        college: "vesit",
        print : function(){
            console.log(`name : ${this.name1}`)
            console.log(`roll No : ${this.rollNo}`)
            console.log(`class ${this.class1}`)
            console.log(`college : ${this.college}`)
        }

    }

    student.print()


    console.log("")
    console.log("print by constructor")

    function student1(name1 , rollNo , class1 ,college){
        this.name1 = name1
        this.rollNo = rollNo
        this.class1 = class1
        this.college = college

        this.print = ()=>{
            console.log(`name : ${this.name1}`)
            console.log(`roll No : ${this.rollNo}`)
            console.log(`class ${this.class1}`)
            console.log(`college : ${this.college}`)
        }

    }

    let student2 = new student1("Ayub" , 10 , "D15A" , "vesit")
    student2.print()


    function takeInput(){
        let roll = prompt("enter your roll no")
        
        if(roll == 0){
            console.log("roll Number cant be zero")
        }
        else{
            student.rollNo = roll;
            console.log("")
            console.log("printing after changing roll no")
            console.log(student.print())
        }
    }
    takeInput()
}