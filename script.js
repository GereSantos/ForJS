let nameSpaceShip = window.prompt('Insira o nome da Nave')
let replaceMent = window.prompt('Insira qual caractere deseja substituir')
let Exchange = window.prompt('Por qual caractere deseja substituir ?')
let newNameSpaceship = ""

for(let i =0; i < nameSpaceShip.length;i++){
    if(nameSpaceShip[i] == replaceMent) {
        newNameSpaceship += Exchange
    }else{
        newNameSpaceship+=nameSpaceShip[i]
    }
}

alert('O novo Nome da Nave é ' + newNameSpaceship)