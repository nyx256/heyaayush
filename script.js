class Paper {

    init(paper) {

     paper.addEventListener('mousedown', (e) => {
        alert('mouse is selected');
     })

    }
    
}
const papers=Array.from( document.querySelectorAll('.paper'))

papers.forEach( paper => {
    const p = new Paper();
    p.init(paper);
})