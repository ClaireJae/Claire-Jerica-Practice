let health = 0;
let hunger = 0;
let happiness = 0;
let petName = "Unnamed";

function setPetName() {
    const nameInput = document.getElementById("pet-name-input");
    const newName = nameInput.value.trim();

    if (newName) {
        petName = newName;
        document.getElementById("pet-name").textContent = petName;
        nameInput.value = "";
        showActionMessage(`You named your pet ${petName}!`);
    } else {
        alert("Enter a valid name!");
    }
}

function updatePetStatus() {
    health = Math.max(0, Math.min(100, health));
    hunger = Math.max(0, Math.min(100, hunger));
    happiness = Math.max(0, Math.min(100, happiness));
}

function changeImageTemporarily(tempImage, duration = 5000) {
    const petImage = document.getElementById("pet-image");
    const originalImage = "../claireImages/pixel-cat.gif";

    petImage.src = tempImage;
    setTimeout(() => {
        petImage.src = originalImage;
    }, duration);
}

function feedPet() {
    if (hunger < 100) {
        hunger += 10;
        health += 5;
        happiness += 2;
        changeImageTemporarily("../claireImages/eatingKitty.gif");
    } else {
        alert(`${petName} is already full!`);
    }
    updatePetStatus();
}

function playWithPet() {
    if (happiness < 100) {
        happiness += 10;
        health += 5;
        changeImageTemporarily("../claireImages/playingKitty.gif");
    } else {
        alert(`${petName} is getting sleepy...`);
    }
    updatePetStatus();
}

function TakeANap() {
    if (health < 100) {
        health += 15;
        hunger += 5;
        changeImageTemporarily("../claireImages/sleepyCat.gif");
    } else {
        alert(`${petName} is ready to play again!`);
    }
    updatePetStatus();
}

function DressUp() {
    if (health < 100) {
        happiness += 20;
        hunger += 5;
        changeImageTemporarily("../claireImages/dressUpCat.gif");
    } else {
        alert(`${petName} tired of dress up :(`);
    }
    updatePetStatus();
}

function showActionMessage(message) {
    const statusDiv = document.getElementById("pet-status");
    const messageDiv = document.createElement("p");
    messageDiv.textContent = message;
    statusDiv.appendChild(messageDiv);

    setTimeout(() => {
        statusDiv.removeChild(messageDiv);
    }, 3000);
}
