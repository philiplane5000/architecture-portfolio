document.addEventListener("DOMContentLoaded", function(e) { 
    //BEGIN SCRIPT//
    const projectName = document.querySelector("[name='project-name']");
    const projectId = document.querySelector("[name='project-id']");

    const image01 = document.querySelector("[name='image01']");
    const image01Caption = document.querySelector("[name='image01-caption']");
    const image02 = document.querySelector("[name='image02']");
    const image02Caption = document.querySelector("[name='image02-caption']");
    const image03 = document.querySelector("[name='image03']");
    const image03Caption = document.querySelector("[name='image03-caption']");
    const image04 = document.querySelector("[name='image04']");
    const image04Caption = document.querySelector("[name='image04-caption']");

    const about01 = document.querySelector("[name='about01']");
    const about02 = document.querySelector("[name='about02']");
    const about03 = document.querySelector("[name='about03']");
    const about04 = document.querySelector("[name='about04']");


    const details01 = document.querySelector("[name='details01']");
    const details02 = document.querySelector("[name='details02']");
    const details03 = document.querySelector("[name='details03']");
    const details04 = document.querySelector("[name='details04']");

    const submitBtn = document.querySelector("#submitNewProject");

    submitBtn.addEventListener('click', function(e){
        e.preventDefault()
        let newProject = buildProjectObj()
        axios.post('/api', newProject)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    })

    function buildProjectObj() {
        let imageArray = [];
        imageArray.push(image01.value);
        if(image02.value.length > 0) {
            imageArray.push(image02.value)
        }
        let aboutArray = [];
        aboutArray.push(about01.value);
        if(about02.value.length > 0) {
            aboutArray.push(about02.value)
        }
        let project = {
            name: projectName.value,
            id: projectId.value,
            images: imageArray,
            about: aboutArray,
            details: detailsArray,
        }
        return project
    }
    //END SCRIPT //
  });