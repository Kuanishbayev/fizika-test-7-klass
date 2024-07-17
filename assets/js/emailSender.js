const person = {
    first_name: null,
    last_name: null,
    klass: null,
    sending_date: null,
    count_of_questions: null,
    count_of_true_answers: null,
}

person.first_name = prompt("Atıńız:")
person.last_name = prompt("Familiyańız:")
person.klass = prompt("Klasıńız:")

while (person.first_name === "") {
    alert("Atıńızdı kiritpedińiz!")
    person.first_name = prompt("Atıńız:")
}

while (person.last_name === "") {
    alert("Familiyańızdı kiritpedińiz!")
    person.last_name = prompt("Familiyańız:")
}

while (person.klass === "") {
    alert("Klasıńızdı kiritpedińiz!")
    person.klass = prompt("Klasıńız:")
}