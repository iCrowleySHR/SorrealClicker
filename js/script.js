let cookies = parseInt(localStorage.getItem('cookies')) || 0;
let upgrades = parseInt(localStorage.getItem('upgrades')) || 0;
let clickValue = parseInt(localStorage.getItem('clickValue')) || 1;
let autoClickers = parseInt(localStorage.getItem('autoClickers')) || 0;

function updateUpgradeCost() {
    const upgradeCost = 10 * Math.pow(10, upgrades);
    document.getElementById('upgrade-cost').innerText = upgradeCost;
}


function clickCookie() {
    cookies += clickValue;
    document.getElementById('cookie-count').innerText = cookies;
    
    // Adiciona a classe 'clicked' ao elemento #cookie
    document.getElementById('cookie').classList.add('clicked');

    // Remove a classe 'clicked' após a animação terminar
    setTimeout(() => {
        document.getElementById('cookie').classList.remove('clicked');
    }, 200); // Tempo deve ser igual à duração da transição em milissegundos
    saveToLocalStorage();
    
}

function resetlocalstorage() {
    localStorage.clear();
    location.reload();

}

function buyUpgrade() {
    const upgradeCost = 10 * Math.pow(10, upgrades);
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        upgrades++;
        clickValue *= 2;
        document.getElementById('cookie-count').innerText = cookies;
        updateUpgradeCost(); // Atualiza o custo do próximo upgrade
        saveToLocalStorage();
        Swal.fire({
            imageUrl: "https://media.tenor.com/RbYAPGbyilAAAAAC/alegria-feliz.gif",
            imageWidth: 400,
            imageHeight: 400,
            title: "Comprou o baguio",
            showConfirmButton: false,
            timer: 1000,
            backdrop: false,
            customClass: {
                popup: 'your-custom-class',
            },
            allowOutsideClick: false,
            didOpen: () => {
                const modalContainer = document.querySelector('.swal2-container');
                modalContainer.style.position = 'fixed';
            }
        });    } else {
        Swal.fire({
            showConfirmButton: false,
            timer: 1500,
            imageUrl: "https://img.freepik.com/vetores-premium/rosto-de-emoji-pensativo-e-triste-ou-emoticon-3d-decepcionado_248162-149.jpg",
            imageWidth: 400,
            imageHeight: 400,
            title: "Sem cookie meu fio",
            backdrop: false, // Desativa o backdrop para evitar problemas de sobreposição
            customClass: {
                popup: 'your-custom-class', // Adicione uma classe personalizada para personalizar o estilo se necessário
            },
            allowOutsideClick: false,
            didOpen: () => {
                const modalContainer = document.querySelector('.swal2-container');
                modalContainer.style.position = 'fixed';
            }
        });
    }
}
function buyAutoClicker() {
    const autoClickerCost = 50 * Math.pow(2, autoClickers);
    if (cookies >= autoClickerCost) {
        cookies -= autoClickerCost;
        autoClickers++;
        document.getElementById('cookie-count').innerText = cookies;
        updateAutoClickerCost(); // Atualiza o custo do próximo auto clicker
        startAutoClicker(); // Inicia o novo auto clicker
        saveToLocalStorage();
        Swal.fire({
            imageUrl: "https://media.tenor.com/RbYAPGbyilAAAAAC/alegria-feliz.gif",
            imageWidth: 400,
            imageHeight: 400,
            title: "Comprou o baguio",
            showConfirmButton: false,
            timer: 1000,
            backdrop: false,
            customClass: {
                popup: 'your-custom-class',
            },
            allowOutsideClick: false,
            didOpen: () => {
                const modalContainer = document.querySelector('.swal2-container');
                modalContainer.style.position = 'fixed';
            }
        });
        } else {
        Swal.fire({
            imageUrl: "https://img.freepik.com/vetores-premium/rosto-de-emoji-pensativo-e-triste-ou-emoticon-3d-decepcionado_248162-149.jpg",
            imageWidth: 400,
            imageHeight: 400,
            title: "Sem cookie meu fio",
            showConfirmButton: false,
            timer: 1000,
            backdrop: false,
            customClass: {
                popup: 'your-custom-class',
            },
            allowOutsideClick: false,
            didOpen: () => {
                const modalContainer = document.querySelector('.swal2-container');
                modalContainer.style.position = 'fixed';
            }
        });
    }
}

function startAutoClicker() {
    setInterval(() => {
        clickCookie();
    }, 1000); // Clica no cookie a cada segundo (pode ajustar o intervalo conforme necessário)
}

function updateAutoClickerCost() {
    const autoClickerCost = 50 * Math.pow(2, autoClickers);
    document.getElementById('auto-clicker-cost').innerText = autoClickerCost;
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem('cookies', cookies);
    localStorage.setItem('upgrades', upgrades);
    localStorage.setItem('clickValue', clickValue);
    localStorage.setItem('autoClickers', autoClickers);

    document.getElementById('cookie-count').innerText = cookies;
}



// Chama esta função para inicializar o custo do upgrade
updateUpgradeCost();
saveToLocalStorage()
