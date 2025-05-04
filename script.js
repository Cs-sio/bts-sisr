document.querySelectorAll('.view-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const details = this.nextElementSibling;
        details.classList.toggle('visible');
        this.textContent = details.classList.contains('visible') ? 'Voir moins' : 'Détails';
    });
});