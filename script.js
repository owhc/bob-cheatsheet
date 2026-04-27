function switchTab(tabName) {
    // 隱藏所有 tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // 移除所有 tab 的 active class
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 顯示選中的 tab content
    document.getElementById(tabName).classList.add('active');
    
    // 添加 active class 到選中的 tab
    event.target.classList.add('active');
}

// Made with Bob
