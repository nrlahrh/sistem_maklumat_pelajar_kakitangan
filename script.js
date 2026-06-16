const API_URL = "https://jsonplaceholder.typicode.com/users";
let kakitanganData = [];
window.onload = async () => {
    await loadKakitangan();
};
async function loadKakitangan() {

    try {
        const response = await fetch(API_URL);
        kakitanganData = await response.json();
        paparkanData(kakitanganData);

    } catch (error) {
        console.error("Ralat:", error);

    }
}

function paparkanData(data) {
    const table = document.getElementById("staffTable");
    table.innerHTML = "";
    data.forEach(users => {
        table.innerHTML += `
            <tr>
                <td>${users.id}</td>
                <td>${users.name}</td>
                <td>${users.username}</td>
                <td>${users.email}</td>
            </tr>
        `;
    });
}

function searchStaff() {
    const keyword = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered = kakitanganData.filter(kakitangan =>
        kakitangan.name.toLowerCase().includes(keyword) || kakitangan.username.toLowerCase().includes(keyword) || kakitangan.email.toLowerCase().includes(keyword)
    );
    paparkanData(filtered);
}