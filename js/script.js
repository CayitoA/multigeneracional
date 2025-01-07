let sections = document.querySelectorAll ('section')

window.onscroll = () => (
    sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height ){
            sec.classlist.add ('show-animate');

        }
        
        else{
            sec.classlist.remove ('show-animate');
        }
        
     } )
    }