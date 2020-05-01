const db = require("../data/config")

function find(){
    return db("schemes")
}

function findById(id){
    return db("schemes")
    .where("schemes.id", id)
    
}

function findSteps(id){
    return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .where("scheme_id", id)
    .select("schemes.scheme_name", "steps.step_number", "steps.instructions")
    .orderBy("steps.step_number")
}

function add(scheme){
    return db("schemes")
    .insert(scheme)
}

function update(changes, id){
    return db("schemes")
    .update(changes)
    .where({ id })
}

function remove(id){
    return db("schemes")
    .where("id", id)
    .del()
}

function addStep(step){
    return db("steps")
    .join("schemes", "steps.scheme_id", "schemes.id")
    .insert(step)
}


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}