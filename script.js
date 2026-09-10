const checkoutUrl = 'https://pay.kiwify.com.br/ztStsbu';
const video = document.getElementById('video');
const postVideoCta = document.getElementById('postVideoCta');
const soundToggle = document.getElementById('soundToggle');
const supportButton = document.getElementById('supportButton');
const supportDialog = document.getElementById('supportDialog');
const supportClose = document.getElementById('supportClose');

document.querySelectorAll('.buy').forEach(button => {
  button.href = checkoutUrl;
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
});

if (supportButton && supportDialog) {
  supportButton.addEventListener('click', () => supportDialog.showModal());
  supportClose?.addEventListener('click', () => supportDialog.close());
  supportDialog.addEventListener('click', event => {
    if (event.target === supportDialog) supportDialog.close();
  });
}

if (video) {
  video.muted = true;
  video.play().catch(() => {
    // Alguns navegadores aguardam a página ficar visível antes de iniciar.
  });

  if (soundToggle) {
    const updateSoundButton = () => {
      soundToggle.textContent = video.muted ? 'Ativar som' : 'Desativar som';
      soundToggle.setAttribute('aria-pressed', String(!video.muted));
    };

    soundToggle.addEventListener('click', () => {
      video.muted = !video.muted;
      if (video.paused) video.play().catch(() => {});
      updateSoundButton();
    });

    video.addEventListener('volumechange', updateSoundButton);
    updateSoundButton();
  }

  video.addEventListener('ended', () => {
    postVideoCta.classList.remove('hidden');
    postVideoCta.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
