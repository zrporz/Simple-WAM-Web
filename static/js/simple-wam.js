document.addEventListener('DOMContentLoaded', function () {
  function playPanelVideos(panel) {
    panel.querySelectorAll('video').forEach(function (video) {
      video.muted = true;
      video.play().catch(function () {});
    });
  }

  function pausePanelVideos(panel) {
    panel.querySelectorAll('video').forEach(function (video) {
      video.pause();
      video.currentTime = 0;
    });
  }

  document.querySelectorAll('.video-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      var panel = button.closest('.video-toggle-row').nextElementSibling;
      var isOpen = button.classList.toggle('is-active');
      button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

      if (panel && panel.classList.contains('video-panel')) {
        panel.classList.toggle('is-open', isOpen);
        if (isOpen) playPanelVideos(panel);
        else pausePanelVideos(panel);
      }
    });
  });

  var copyButton = document.querySelector('.copy-bibtex');
  var bibtex = document.getElementById('bibtex-code');
  if (copyButton && bibtex) {
    copyButton.addEventListener('click', function () {
      navigator.clipboard.writeText(bibtex.innerText).then(function () {
        copyButton.textContent = 'Copied';
        window.setTimeout(function () { copyButton.textContent = 'Copy'; }, 1600);
      }).catch(function () {
        copyButton.textContent = 'Select & Copy';
      });
    });
  }

  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.page-toc a'));
  var sections = tocLinks.map(function (link) {
    return document.querySelector(link.getAttribute('href'));
  }).filter(Boolean);

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.filter(function (entry) { return entry.isIntersecting; }).forEach(function (entry) {
        tocLinks.forEach(function (link) {
          link.classList.toggle('is-current', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });
    sections.forEach(function (section) { observer.observe(section); });
  }
});
