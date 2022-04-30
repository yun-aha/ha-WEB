interface Movie{
    name: string;
    age: number;
    call();
}

type Character = string[];
let id:Character = ['Ron','Hermione', 'Draco']

function harry(person: string) : string{
    let a :number = 12;
    return `Hello + ${person} : ${a}age`;
}

let User : Movie = {
    name: 'Harry Potter',
    age: 10,
    call(){
        harry(User.name)
    }
}

document.body.textContent = User.call();