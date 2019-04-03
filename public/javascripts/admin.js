document.addEventListener("DOMContentLoaded", function(e) { 
    //BEGIN SCRIPT//
    const projectNameInput = document.querySelector("[name='project-name']");
    const projectId = document.querySelector("[name='project-id']");
    const projectLocation = document.querySelector("[name='project-location']");
    const projectClass = document.querySelector("[name='project-class']");

    const coverImageInput = document.querySelector("[name='cover-image']");
    const image01 = document.querySelector("[name='image01']");
    const image02 = document.querySelector("[name='image02']");
    const image03 = document.querySelector("[name='image03']");
    const image04 = document.querySelector("[name='image04']");

    const about01 = document.querySelector("[name='about01']");
    const about02 = document.querySelector("[name='about02']");
    const about03 = document.querySelector("[name='about03']");
    const about04 = document.querySelector("[name='about04']");
    const about05 = document.querySelector("[name='about05']");

    const details01 = document.querySelector("[name='details01']");
    const details02 = document.querySelector("[name='details02']");
    const details03 = document.querySelector("[name='details03']");
    const details04 = document.querySelector("[name='details04']");

    const deleteId = document.querySelector("[name='delete-id']");

    const submitBtn = document.querySelector("#submitNewProject");
    const deleteProjectBtn = document.querySelector("#deleteProject");

    submitBtn.addEventListener('click', function(e){
        e.preventDefault()
        let newProject = buildProjectObj()
        console.log('***** NEW PROJECT *****')
        console.log(newProject)
        console.log('***********************')
        postProject(newProject)
            .then(res => {
                handleResponse(res)
            })
            .catch(err => {
                console.log(err)
            })
    })
    
    deleteProjectBtn.addEventListener('click', function(e) {
        e.preventDefault()
        logData(deleteId.value);

        if(deleteId.value < 1) {
            alert('"Project ID" field is empty!');
            return
        }

        deleteProject(deleteId.value)            
            .then(res => {
                handleResponse(res)
            })
            .catch(err => {
                console.log(err)
            })
        // axios.delete(`/api/${deleteId.value}`)
    })

    function postProject(project) {
        return axios.post('/api', project)
    }

    function deleteProject(id) {
        return axios.delete(`/api/${id}`)
    }

    function handleResponse(res) {
        (res.status === 200) ? window.location = "/projects" : alert('SOMETHING WENT WRONG!')
    }

    function logData(data) {
        console.log(`******// ${data} //******`)
    }

    function buildProjectObj() {
        let imageArray, aboutArray, detailsArray;
        imageArray = [];
        if(image01.value.length > 0) {
            imageArray.push({imgSrc: image01.value})
        }
        if(image02.value.length > 0) {
            imageArray.push({imgSrc: image02.value})
        }
        if(image03.value.length > 0) {
            imageArray.push({imgSrc: image03.value})
        }
        if(image04.value.length > 0) {
            imageArray.push({imgSrc: image04.value})
        }
        aboutArray = [];
        if(about01.value.length > 0) {
            aboutArray.push({paragraph: about01.value})
        }
        if(about02.value.length > 0) {
            aboutArray.push({paragraph: about02.value})
        }
        if(about03.value.length > 0) {
            aboutArray.push({paragraph: about03.value})
        }
        if(about04.value.length > 0) {
            aboutArray.push({paragraph: about04.value})
        }
        if(about05.value.length > 0) {
            aboutArray.push({paragraph: about05.value})
        }
        detailsArray = [];
        if(details01.value.length > 0) {
            detailsArray.push({detail: details01.value})
        }
        if(details02.value.length > 0) {
            detailsArray.push({detail: details02.value})
        }
        if(details03.value.length > 0) {
            detailsArray.push({detail: details03.value})
        }
        if(details04.value.length > 0) {
            detailsArray.push({detail: details04.value})
        }
        return {
            name: projectNameInput.value,
            coverImage: coverImageInput.value,
            id: projectId.value,
            location: projectLocation.value,
            class: projectClass.value,
            images: imageArray,
            about: aboutArray,
            details: detailsArray,
        }
    }
    //END SCRIPT //
  });