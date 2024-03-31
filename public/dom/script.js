
let arqueros = ["12. Leandro Brey"]
let defensores = ["42. Lucas Blondel", "38. Aaron Anselmino", "6. Marcos Rojo","23. Lautaro Blanco"]
let mediocampistas = ["21. Equi Fernandez", "47. Jabes Saralegui", "22. Kevin Zenón", "39. Vicente Taborda"]
let delanteros = ["16. Miguel Merentiel", "10. Edinson Cavani"]

let ulArqueros = document.getElementById("arqueros")
let ulDefensores = document.getElementById("defensores")
let ulMediocampistas = document.getElementById("mediocampistas")
let ulDelanteros = document.getElementById("delanteros")

arqueros.forEach(arquero => {
    let li = document.createElement("li")
    li.textContent = arquero
    ulArqueros.appendChild(li)
})

defensores.forEach(defensor => {
    let li = document.createElement("li")
    li.textContent = defensor
    ulDefensores.appendChild(li)
})

mediocampistas.forEach(mediocampista => {
    let li = document.createElement("li")
    li.textContent = mediocampista
    ulMediocampistas.appendChild(li)
})

delanteros.forEach(delantero => {
    let li = document.createElement("li")
    li.textContent = delantero
    ulDelanteros.appendChild(li)
})

