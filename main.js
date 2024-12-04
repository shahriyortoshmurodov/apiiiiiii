async function fetchUserData() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data.results[0];
}

async function updateUser() {
    const user = await fetchUserData();
    document.querySelector('#user-Name').innerText = `${user.name.first} ${user.name.last}`;
    document.querySelector('#user-Phone').innerText = `Phone: ${user.phone || '+998 90 123 45 67'}`;
    document.querySelector('#user-Location').innerText = `Location: ${user.location.city}, ${user.location.country}`;
    document.querySelector('#user-Age').innerText = `Age: ${user.dob.age}`;
    document.querySelector('#user-Email').innerText = `Email: ${user.email}`;
    document.querySelector('#user-Image').src = user.picture.large;
}

document.getElementById('changeUserButton').addEventListener('click', updateUser);