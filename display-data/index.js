fetch("https://jsonplaceholder.typicode.com/users") //
.then((response) => response.json()) // setelah js ambil data dari url menggunakan fetch, data harus parsing ke json menggunakan response.json()
.then((data) => { // setelah parsing, data akan muncul dan baru bisa di akses
    // console.log(data);
    for (let i = 0; i < 6; i++) {
        document.getElementById('userList').innerHTML += `
        <li>
        <h1>${data[i].name}</h1>
        <h3>${data[i].email}</h3>
        <h3>${data[i].phone}</h3>
        <h3>${data[i].website}</h3>
        </li>
        `;
    }
});

// response dan data dibedakan namanya supaya bisa membedakan value/isi dari variabelnya
