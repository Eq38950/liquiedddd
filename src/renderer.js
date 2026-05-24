window.addEventListener('DOMContentLoaded', async () => {
  if (window.CSS?.paintWorklet) {
    try {
      await CSS.paintWorklet.addModule('vendor/smooth-corners-paint.js');
    } catch (err) {
      console.warn('smooth-corners paint worklet failed', err);
    }
  }

  if (window.liquidGL) {
    liquidGL({
      target: '.liquidGL',
      snapshot: 'body',
      refraction: 0.01,
      bevelDepth: 0.06,
      bevelWidth: 0.18,
      frost: 1.5,
      shadow: true,
      specular: true,
      reveal: 'fade',
      tilt: false,
      magnify: 1.15,
    });
  }
});
