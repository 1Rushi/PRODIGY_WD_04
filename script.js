window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section.fade-in');

    sections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        var scrollPosition = window.innerHeight - rect.top;

        if (scrollPosition > 0) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});

(function(){
    emailjs.init("YOUR_USER_ID");
})();