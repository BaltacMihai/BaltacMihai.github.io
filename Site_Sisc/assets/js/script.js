$(document).ready(function () {
    $('select').material_select();
});

document.querySelector('#regbutton').addEventListener("click", (e) => {
    e.preventDefault();
    toastr.remove()
    const rezervare = {
        nume: document.querySelector('#nume').value,
        prenume: document.querySelector('#prenume').value,
        telefon: document.querySelector('#telefon').value,
        email: document.querySelector('#email').value,
        facultate: document.querySelector('#facultate').value,
        specializare: document.querySelector('#specializare').value,
        serie: document.querySelector('#serie').value,
        grupa: document.querySelector("#grupa").value,
        an_inceput: document.querySelector("#an_inceput").value,
        taxa_inscriere: document.querySelector("#taxa_inscriere").value,
    }
    axios.post('/inscriere', rezervare)
        .then((response) => {
            toastr.success("Te-ai inscris cu succes!");
        })
        .catch((error) => {
            const values = Object.values(error.response.data)
            console.log(error);
            values.map(item => {
                toastr.error(item)
            })
        })

}, false)