function copyCmd() {
  const cmdText = document.getElementById('cmd-text').innerText;
  navigator.clipboard.writeText(cmdText).then(() => {
    const btn = document.getElementById('copy-btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span>Copied!</span>';
    btn.style.backgroundColor = 'rgba(16, 185, 129, 0.3)';
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.backgroundColor = '';
    }, 2000);
  });
}
