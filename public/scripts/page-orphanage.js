const options = {
  dragging: false, 
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
}

const map = L.map('mapid', options).setView([-29.9293999,-51.0390298], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
  iconUrl: "public/images/map-marker.svg",
  iconSize: [48, 58],
})

L
.marker([-29.9293999,-51.0390298], { icon })
.addTo(map)



function selectImage(event){
  const button = event.currentTarget

  const buttons = document.querySelectorAll(".images button")


  buttons.forEach(removeActiveClass)

  function removeActiveClass(button){
    button.classList.remove("active")
  }

  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")
  imageContainer.src = image.src


  button.classList.add("active")
}