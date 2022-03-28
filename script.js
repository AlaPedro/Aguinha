//progressValue
var meta = document.getElementById("inp-meta")
var progresso = document.getElementsByClassName("progressBar")
var inputVal = document.getElementById('inp-add')
var aguaBebida = []

const changeMeta = () =>{
    let newDefinedMeta = document.getElementById('newMeta')
    newDefinedMeta.innerHTML = `Sua metá diária de Água é de: ${meta.value} ml`

    setLocalStorageMeta()

    changeProgress()
}

const addValue = () => {
    aguaBebida.push(parseInt(inputVal.value))
    changeProgress(totalValue())

    setLocalStorageTotalBebido()
}

const totalValue = () => {
    var total = aguaBebida.reduce((total, currentElement) => total + currentElement)
    return total
}

const changeProgress = (total) => {
    let progressPercentual =((total / meta.value)*100)
    progresso[0].setAttribute("style", "width:" + progressPercentual + "%")

    let aguaBebidaXQuantoFalta = document.getElementById('progressValue')
    aguaBebidaXQuantoFalta.innerHTML = `${total}/${meta.value}`
    console.log('Água adicionada',inputVal.value, 'ml')
}

// Set localStorage

const setLocalStorageMeta = () =>{
    localStorage.dadoMeta = JSON.stringify(meta.value)
}

const setLocalStorageTotalBebido = () =>{
    localStorage.dadoTotalValue = JSON.stringify(aguaBebida)
}

//get localStorage

function loadLocalStorage () {
    document.getElementById("inp-meta").value = JSON.parse(localStorage.dadoMeta)
    changeMeta()

    document.getElementById('inp-add').value = JSON.parse(localStorage.dadoTotalValue)
    addValue()
}

window.addEventListener("load", () => {loadLocalStorage(),console.log('LoadConcluido')})