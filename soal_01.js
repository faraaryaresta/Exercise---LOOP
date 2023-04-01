const list = document.getElementById('listUser');

for (let i = 1; i <= 100; i++) {
    const user = document.createElement('li');
    user.innerText = 'User ke - ' + i;
    list.appendChild(user);
}