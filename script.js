const checkoutUrl = 'https://pay.kiwify.com.br/ztStsbu';
const video = document.getElementById('video');
const postVideoCta = document.getElementById('postVideoCta');

document.querySelectorAll('.buy').forEach(button => {
  button.href = checkoutUrl;
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
});

if (video) {
  video.addEventListener('ended', () => {
    postVideoCta.classList.remove('hidden');
    postVideoCta.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
