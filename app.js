const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;


themeBtn.addEventListener('click', () => {

    body.classList.toggle('light-theme');


    if (body.classList.contains('light-theme')) {
        themeIcon.src = 'assets/images/icon-moon.svg';
    } else {
        themeIcon.src = 'assets/images/icon-sun.svg';
    }
});



const filterBtns = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('.Extension-Card'); // Make sure capitalization matches your HTML


filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        
        filterBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        
        const filterValue = btn.getAttribute('data-filter'); // 'all', 'active', or 'inactive'

        cards.forEach(card => {
            
            const checkbox = card.querySelector('input[type="checkbox"]');
            const isChecked = checkbox.checked;

            
            if (filterValue === 'all') {
                
                card.style.display = 'block'; // Or 'flex', depending on your layout
            } 
            else if (filterValue === 'active' && isChecked === true) {
                
                card.style.display = 'block';
            } 
            else if (filterValue === 'inactive' && isChecked === false) {
                
                card.style.display = 'block';
            } 
            else {
                
                card.style.display = 'none';
            }
        });
    });
});