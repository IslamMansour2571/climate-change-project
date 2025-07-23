const video = document.getElementById('myVideo');

video.addEventListener('ended', () => {
  // 1. إزالة الكلاس visible (يبدأ الاختفاء التدريجي)
  video.classList.remove('visible');

  // 2. بعد انتهاء الانتقال (1 ثانية)، أعد تشغيل الفيديو وأضف الكلاس visible
  setTimeout(() => {
    video.currentTime = 0; // يرجع لأول الفيديو
    video.play();          // يشغل الفيديو
    video.classList.add('visible'); // يظهر تدريجياً
  }, 1000); // نفس مدة transition في CSS
});
