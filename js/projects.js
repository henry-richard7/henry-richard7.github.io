fetch("./Data/projects.json")
    .then(function (response) {
        let data = response.json()
        return data
    })

    .then(function (data) {
        var carouselDiv = document.getElementById("project-card-carousel")
        var carouselControls = document.createElement("div")
        carouselControls.id = "carouselExampleControls"
        carouselControls.className = "carousel slide"
        carouselControls.setAttribute("data-bs-ride", "carousel")

        var carouselInner = document.createElement("div")
        carouselInner.className = "carousel-inner"

        for (var i = 0; i < data.length; i++) {
            if (i === 0) {

                var rect = document.createElement("img")
                rect.src = "https://www.teahub.io/photos/full/29-294125_1920x1080-texture-wallpapers-hd-victorian-data-id-black.jpg"
                rect.className = "carousel-background"

                var carouselItem = document.createElement("div")
                carouselItem.className = "carousel-item active"

                var carouselcaption = document.createElement("div")
                carouselcaption.className = "carousel-caption"

                var projectTitle = document.createElement("h5")
                projectTitle.className = "carousel-project-title"
                projectTitle.innerText = data[i]["projectName"]

                var projectDescription = document.createElement("p")
                projectDescription.className = "carousel-project-desc"
                projectDescription.innerText = data[i]["description"]

                var projectImage = document.createElement("img")
                projectImage.className = "carousel-project-img"

                projectImage.src = data[i]["projectImg"]

                var infoButton = document.createElement("a")
                infoButton.className = "btn btn-success btn-sm"
                infoButton.innerText = "Click Here"
                infoButton.setAttribute("href", data[i]["projectUrl"])


                carouselcaption.appendChild(projectImage)
                carouselcaption.appendChild(projectTitle)
                carouselcaption.appendChild(projectDescription)
                carouselcaption.appendChild(infoButton)
                carouselItem.appendChild(carouselcaption)
                carouselItem.appendChild(rect)
                carouselInner.appendChild(carouselItem)
            }
            else {
                var rect = document.createElement("img")
                rect.src = "https://www.teahub.io/photos/full/29-294125_1920x1080-texture-wallpapers-hd-victorian-data-id-black.jpg"

                var carouselItem = document.createElement("div")
                carouselItem.className = "carousel-item"

                var carouselcaption = document.createElement("div")
                carouselcaption.className = "carousel-caption"

                var projectTitle = document.createElement("h5")
                projectTitle.className = "carousel-project-title"
                projectTitle.innerText = data[i]["projectName"]

                var projectDescription = document.createElement("p")
                projectDescription.className = "carousel-project-desc"
                projectDescription.innerText = data[i]["description"]


                var projectImage = document.createElement("img")
                projectImage.className = "carousel-project-img"
                projectImage.src = data[i]["projectImg"]

                var infoButton = document.createElement("a")
                infoButton.className = "btn btn-success btn-sm"
                infoButton.innerText = "Click Here"
                infoButton.setAttribute("href", data[i]["projectUrl"])


                carouselcaption.appendChild(projectImage)
                carouselcaption.appendChild(projectTitle)
                carouselcaption.appendChild(projectDescription)
                carouselcaption.appendChild(infoButton)
                carouselItem.appendChild(carouselcaption)
                carouselItem.appendChild(rect)
                carouselInner.appendChild(carouselItem)
            }

        }

        var previousButton = document.createElement("button")
        var previousIconSpan = document.createElement("span")
        var previousText = document.createElement("span")

        previousButton.className = "carousel-control-prev"
        previousButton.type = "button"
        previousButton.setAttribute("data-bs-target", "#carouselExampleControls")
        previousButton.setAttribute("data-bs-slide", "prev")

        previousIconSpan.className = "carousel-control-prev-icon"
        previousIconSpan.setAttribute("aria-hidden", "true")

        previousText.className = "visually-hidden"
        previousText.innerText = "Previous"

        previousButton.appendChild(previousIconSpan)
        previousButton.appendChild(previousText)

        var nextButton = document.createElement("button")
        var nextIconSpan = document.createElement("span")
        var nextText = document.createElement("span")

        nextButton.className = "carousel-control-next"
        nextButton.type = "button"
        nextButton.setAttribute("data-bs-target", "#carouselExampleControls")
        nextButton.setAttribute("data-bs-slide", "next")

        nextIconSpan.className = "carousel-control-next-icon"
        nextIconSpan.setAttribute("aria-hidden", "true")

        nextText.className = "visually-hidden"
        nextText.innerText = "Next"

        nextButton.appendChild(nextIconSpan)
        nextButton.appendChild(nextText)

        carouselControls.appendChild(carouselInner)
        carouselControls.appendChild(previousButton)
        carouselControls.appendChild(nextButton)

        carouselDiv.appendChild(carouselControls)

    })
