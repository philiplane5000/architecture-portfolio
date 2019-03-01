
document.addEventListener("DOMContentLoaded", function(e) { 
    //BEGIN SCRIPT//
    const projectCards = document.querySelectorAll('.project-card--item');
    const projectCardsContainer = document.querySelector('.project-card-container'); /* (show/hide) */

    // INIT //
    //******//
    attachProjectListeners(projectCards, getProject);

    // INIT FUNCTIONS //
    //****************//
    function attachProjectListeners(cards, eventFn) {
        cards.forEach(card => {
            card.addEventListener('click', eventFn)
        })
    }

    function getProject() {
            let name = (this).getAttribute('data-id');
            axios.get(`/projects/${name}`)
                .then(response => { /* call to render function */
                    console.log(response);
                })
                .catch(error => { /* handle error function */
                    console.log(error);
                })
    }

    // RENDER FUNCTIONS //
    //******************//

    //END SCRIPT //
  });