document.addEventListener("DOMContentLoaded", function(e) { 
    //BEGIN SCRIPT//
    const projectName = document.querySelector("[name='project-name']");
    const projectId = document.querySelector("[name='project-id']");
    const image01 = document.querySelector("[name='image01']");
    const image02 = document.querySelector("[name='image02']");
    const about01 = document.querySelector("[name='about01']");
    const about02 = document.querySelector("[name='about02']");
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
            imageSrc: imageArray,
            about: aboutArray
        }
        return project
    }
    //END SCRIPT //
  });