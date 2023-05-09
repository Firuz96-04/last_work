const animals = ["dog", "cat", "bird", "tiger"]

const my_func = (name) => {
    return `tell me your ${name}`
}


const new_arr = animals.map((elem, idx) => {
        return elem + ` ${idx} pretty`
})

console.log(new_arr);