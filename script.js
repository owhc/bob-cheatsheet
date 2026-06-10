function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// ===== Dark / Light Theme Toggle =====
const THEME_KEY = 'bob-cheatsheet-theme';

function applyTheme(theme) {
    const isLight = theme === 'light';
    document.body.classList.toggle('light-theme', isLight);
    document.getElementById('themeIcon').textContent  = isLight ? '☀️' : '🌙';
    document.getElementById('themeLabel').textContent = isLight ? 'Dark' : 'Light';
    localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
    const current = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    applyTheme(current === 'light' ? 'dark' : 'light');
}

// Restore saved preference on load
(function () {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
        applyTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        applyTheme('light');
    }
})();

// Made with Bob
