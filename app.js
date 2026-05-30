let hybridMemoryEnabled = true;
let hybridMemory = null;

// Инициализация гибридной памяти
async function initHybridMemory() {
    if (!hybridMemoryEnabled) return;
    
    // Подключаем HybridBiologicalMemory
    try {
        const response = await fetch('hybrid_memory_integration.py'); // В реальном приложении - через backend
        hybridMemory = {
            store: (text, importance) => console.log('Stored:', text),
            recall: (query) => ['Пример воспоминания'],
            adapt: (params) => console.log('Adapted:', params),
            status: () => ({
                fractal: {levels: 4},
                epigenetic: {mode: 'verification'},
                immune: {blocked: 3},
                neurogenesis: {neurons: 312}
            })
        };
        updateHybridStatus();
    } catch (e) {
        console.error('Hybrid memory init failed', e);
    }
}

// Обновление статуса
function updateHybridStatus() {
    const statusDiv = document.getElementById('status-content');
    if (!hybridMemory || !hybridMemoryEnabled) {
        statusDiv.innerHTML = '<span style="color: #888">Гибридная память отключена</span>';
        return;
    }
    const status = hybridMemory.status();
    statusDiv.innerHTML = `
        <div>🌿 Фрактальная: ${status.fractal.levels} уровня</div>
        <div>🧬 Эпигенетика: ${status.epigenetic.mode}</div>
        <div>🛡️ Иммунитет: заблокировано ${status.immune.blocked}</div>
        <div>🧠 Нейрогенез: ${status.neurogenesis.neurons} нейронов</div>
    `;
}

// Отправка сообщения с использованием памяти
async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (!message) return;
    
    // Сохраняем в гибридную память
    if (hybridMemoryEnabled && hybridMemory) {
        hybridMemory.store(message, 0.8);
    }
    
    // Добавляем в чат
    const chat = document.getElementById('chat-messages');
    chat.innerHTML += `<div class="user-msg">${message}</div>`;
    input.value = '';
    
    // Симуляция ответа
    setTimeout(() => {
        chat.innerHTML += `<div class="ai-msg">Ответ с учётом гибридной памяти...</div>`;
        updateHybridStatus();
    }, 500);
}

// Инициализация при загрузке
window.onload = function() {
    initHybridMemory();
    // Загрузка настроек
    loadSettings();
};

// Загрузка настроек
function loadSettings() {
    const enabled = localStorage.getItem('hybridMemoryEnabled');
    if (enabled !== null) {
        hybridMemoryEnabled = enabled === 'true';
    }
}

// Сохранение настроек
function saveSettings() {
    localStorage.setItem('hybridMemoryEnabled', hybridMemoryEnabled);
}