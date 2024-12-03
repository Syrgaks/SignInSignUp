
const settingsButton = document.getElementById('settings-btn');
const settingsMenu = document.getElementById('settings-menu');
const changePhotoButton = document.getElementById('change-photo');
const changeInfoButton = document.getElementById('change-info');
const changeThemeButton = document.getElementById('change-theme');
const logoutButton = document.getElementById('logout-btn');
const uploadInput = document.getElementById('upload-picture');
const profilePicture = document.getElementById('profile-picture');
const profileIcon = document.getElementById('profile-icon');
const deletePhotoButton = document.getElementById('delete-photo');
const profileName = document.getElementById('profile-name');
const profileDescription = document.getElementById('profile-description');


settingsButton.addEventListener('click', () => {
    settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
});


changePhotoButton.addEventListener('click', () => {
    uploadInput.click(); 
    settingsMenu.style.display = 'none'; 
});


changeInfoButton.addEventListener('click', () => {
    const newName = prompt('Введите новое имя:', profileName.textContent);
    const newDescription = prompt('Введите новое описание:', profileDescription.textContent);
    
    if (newName) profileName.textContent = newName;
    if (newDescription) profileDescription.textContent = newDescription;
    
    settingsMenu.style.display = 'none'; 
});


changeThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    settingsMenu.style.display = 'none'; 
});


logoutButton.addEventListener('click', () => {
    alert("Вы вышли из профиля.");
    
    settingsMenu.style.display = 'none'; 
});


uploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; 
    if (file) {
        const reader = new FileReader(); 
        reader.onload = (e) => {
            profilePicture.src = e.target.result; 
            profilePicture.style.display = 'block';
            profileIcon.style.display = 'none'; 
            deletePhotoButton.style.display = 'inline-block'; 
        };
        reader.readAsDataURL(file); 
    }
});


deletePhotoButton.addEventListener('click', () => {
    profilePicture.src = ''; 
    profilePicture.style.display = 'none'; 
    profileIcon.style.display = 'flex'; 
    deletePhotoButton.style.display = 'none'; 
});
