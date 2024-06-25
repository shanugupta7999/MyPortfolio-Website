 let menuIcon=document.querySelector('#menu-icon');
 let navbar=document.querySelector('.navbar');
 let sections=document.querySelectorAll('section');
 let navLinks=document.querySelectorAll('header nav a');
window.onscroll=()=>
    {
        sections.forEach(sec=>{
            let top=window.scrollY;
            let offset=sec.offsetTop-150;
            let height=sec.offsetHeight;
            let id=sec.getAttribute('id');

            if(top>=offset && top>offset+height)
                {
                    navLinks.forEach(linkks=>{
                        linkks.classList.remove('active');
                        document.querySelector('header nav a [href*='+id+' ]').classList.add('active')
                    })
                }
        })
    }

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//BACKENED PART....

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fullName = document.querySelector('input[name="fullName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fullName,
            email,
            number,
            subject,
            message
        }),
    });

    const result = await response.json();

    if (response.ok) {
        alert(result.message);
    } else {
        alert(`Failed to send message: ${result.message}`);
    }
});
