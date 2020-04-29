const db = require("../data/config")

function find(){
    return db("schemes")
}

function findById(id){
    return db("schemes")
    .where("schemes.id", id)
    
}

function findSteps(id){

}

function add(scheme){

}

function update(changes, id){

}

function remove(id){

}


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}