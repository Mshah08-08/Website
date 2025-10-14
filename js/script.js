// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Brain toggle functionality (collar-toggle)
const collarToggleButtons = document.querySelectorAll('.collar-toggle');
const leftBrain = document.getElementById('left-brain');
const rightBrain = document.getElementById('right-brain');

collarToggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const side = this.getAttribute('data-side');
        collarToggleButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        if (side === 'left') {
            leftBrain.classList.remove('hidden');
            rightBrain.classList.add('hidden');
        } else {
            rightBrain.classList.remove('hidden');
            leftBrain.classList.add('hidden');
        }
    });
});

// Modal functionality for right brain projects
const artItems = document.querySelectorAll('.art-item');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

const projectDetails = {
    'rocket-sketch': {
        title: 'Rocket Sketch',
        img: 'images/art1.jpg',
        desc: 'Concept art for thrust vector rocket design. <br><br>Explores the technical and creative process behind stabilizing rockets using gimbals and custom flight computers. Includes sketches, notes, and design iterations.'
    },
    'go-kart-blueprint': {
        title: 'Go-Kart Blueprint',
        img: 'images/art2.jpg',
        desc: 'Hand-drawn plans for electric go-kart frame. <br><br>Features frame geometry, motor placement, and wiring diagrams. Shows the blend of engineering and artistic planning.'
    },
    'digital-painting': {
        title: 'Digital Painting',
        img: 'images/art3.jpg',
        desc: 'AI-inspired abstract artwork. <br><br>Created using digital tools and generative techniques. Represents the intersection of creativity and technology.'
    },
    'photography': {
        title: 'Photography',
        img: 'images/art4.jpg',
        desc: 'Experimental photo series. <br><br>Captures moments from engineering projects and creative explorations. Focuses on composition, light, and storytelling.'
    }
};

artItems.forEach(item => {
    item.addEventListener('click', function() {
        const project = item.getAttribute('data-project');
        if (projectDetails[project]) {
            modalBody.innerHTML = `
                <h2>${projectDetails[project].title}</h2>
                <img src="${projectDetails[project].img}" alt="${projectDetails[project].title}" style="width:100%;border-radius:8px;margin-bottom:16px;">
                <div style="font-size:15px;color:#555;">${projectDetails[project].desc}</div>
            `;
            modal.classList.remove('hidden');
        }
    });
});

closeBtn.addEventListener('click', function() {
    modal.classList.add('hidden');
    modalBody.innerHTML = '';
});

// Close modal on outside click
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.add('hidden');
        modalBody.innerHTML = '';
    }
});