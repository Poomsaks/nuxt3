<script setup>
import { onMounted } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
import { MarkerClusterer } from '@googlemaps/markerclusterer'

// definePageMeta({
//   middleware: ['auth']
//   // or middleware: 'auth'
// })
const trafficLayer = null
onMounted(async () => {
  // console.log(process.env.GOOGLE_MAP_TOKEN)
  const loader = new Loader({
    apiKey: '', // Make sure you have defined this environment variable
    version: 'weekly'
  })

  // loader.load().then(() => {
  //   new google.maps.Map(document.getElementById('map'), {
  //     center: { lat: 13.76836446790013, lng: 100.55145680397254 },
  //     zoom: 10
  //   })
  // })
  await loader.load()

  // const polyfillScript = document.createElement('script')
  // polyfillScript.src = 'https://polyfill.io/v3/polyfill.min.js?features=default'
  // document.head.appendChild(polyfillScript)

  // const fontAwesomeScript = document.createElement('script')
  // fontAwesomeScript.src = 'https://use.fontawesome.com/releases/v6.2.0/js/all.js'
  // document.head.appendChild(fontAwesomeScript)

  const fontAwesomeScript = document.createElement('script')
  fontAwesomeScript.src = 'https://polyfill.io/v3/polyfill.min.js?features=default'
  document.head.appendChild(fontAwesomeScript)

  initMap()
})
// async function initMap() {
//   // Request needed libraries.
//   const { Map } = await google.maps.importLibrary('maps')
//   const { AdvancedMarkerElement } = await google.maps.importLibrary('marker')
//   const center = { lat: 37.43238031167444, lng: -122.16795397128632 }
//   const map = new Map(document.getElementById('map'), {
//     zoom: 11,
//     center,
//     mapId: '4504f8b37365c3d0'
//   })

//   for (const property of properties) {
//     const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
//       map,
//       content: buildContent(property),
//       position: property.position,
//       title: property.description
//     })

//     AdvancedMarkerElement.addListener('click', () => {
//       toggleHighlight(AdvancedMarkerElement, property)
//     })
//   }
// }

// function toggleHighlight(markerView, property) {
//   if (markerView.content.classList.contains('highlight')) {
//     markerView.content.classList.remove('highlight')
//     markerView.zIndex = null
//   } else {
//     markerView.content.classList.add('highlight')
//     markerView.zIndex = 1
//   }
// }

// function buildContent(property) {
//   const content = document.createElement('div')

//   content.classList.add('property')
//   content.innerHTML = `
//     <div class="icon">
//         <i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}"></i>
//         <span class="fa-sr-only">${property.type}</span>
//     </div>
//     <div class="details">
//         <div class="price">${property.price}</div>
//         <div class="address">${property.address}</div>
//         <div class="features">
//         <div>
//             <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
//             <span class="fa-sr-only">bedroom</span>
//             <span>${property.bed}</span>
//         </div>
//         <div>
//             <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
//             <span class="fa-sr-only">bathroom</span>
//             <span>${property.bath}</span>
//         </div>
//         <div>
//             <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
//             <span class="fa-sr-only">size</span>
//             <span>${property.size} ft<sup>2</sup></span>
//         </div>
//         </div>
//     </div>
//     `
//   return content
// }

// const properties = [
//   {
//     address: '215 Emily St, MountainView, CA',
//     description: 'Single family house with modern design',
//     price: '$ 3,889,000',
//     type: 'home',
//     bed: 5,
//     bath: 4.5,
//     size: 300,
//     position: {
//       lat: 37.50024109655184,
//       lng: -122.28528451834352
//     }
//   },
//   {
//     address: '108 Squirrel Ln &#128063;, Menlo Park, CA',
//     description: 'Townhouse with friendly neighbors',
//     price: '$ 3,050,000',
//     type: 'building',
//     bed: 4,
//     bath: 3,
//     size: 200,
//     position: {
//       lat: 37.44440882321596,
//       lng: -122.2160620727
//     }
//   },
//   {
//     address: '100 Chris St, Portola Valley, CA',
//     description: 'Spacious warehouse great for small business',
//     price: '$ 3,125,000',
//     type: 'warehouse',
//     bed: 4,
//     bath: 4,
//     size: 800,
//     position: {
//       lat: 37.39561833718522,
//       lng: -122.21855116258479
//     }
//   },
//   {
//     address: '98 Aleh Ave, Palo Alto, CA',
//     description: 'A lovely store on busy road',
//     price: '$ 4,225,000',
//     type: 'store-alt',
//     bed: 2,
//     bath: 1,
//     size: 210,
//     position: {
//       lat: 37.423928529779644,
//       lng: -122.1087629822001
//     }
//   },
//   {
//     address: '2117 Su St, MountainView, CA',
//     description: 'Single family house near golf club',
//     price: '$ 1,700,000',
//     type: 'home',
//     bed: 4,
//     bath: 3,
//     size: 200,
//     position: {
//       lat: 37.40578635332598,
//       lng: -122.15043378466069
//     }
//   },
//   {
//     address: '197 Alicia Dr, Santa Clara, CA',
//     description: 'Multifloor large warehouse',
//     price: '$ 5,000,000',
//     type: 'warehouse',
//     bed: 5,
//     bath: 4,
//     size: 700,
//     position: {
//       lat: 37.36399747905774,
//       lng: -122.10465384268522
//     }
//   },
//   {
//     address: '700 Jose Ave, Sunnyvale, CA',
//     description: '3 storey townhouse with 2 car garage',
//     price: '$ 3,850,000',
//     type: 'building',
//     bed: 4,
//     bath: 4,
//     size: 600,
//     position: {
//       lat: 37.38343706184458,
//       lng: -122.02340436985183
//     }
//   },
//   {
//     address: '868 Will Ct, Cupertino, CA',
//     description: 'Single family house in great school zone',
//     price: '$ 2,500,000',
//     type: 'home',
//     bed: 3,
//     bath: 2,
//     size: 100,
//     position: {
//       lat: 37.34576403052,
//       lng: -122.04455090047453
//     }
//   },
//   {
//     address: '655 Haylee St, Santa Clara, CA',
//     description: '2 storey store with large storage room',
//     price: '$ 2,500,000',
//     type: 'store-alt',
//     bed: 3,
//     bath: 2,
//     size: 450,
//     position: {
//       lat: 37.362863347890716,
//       lng: -121.97802139023555
//     }
//   },
//   {
//     address: '2019 Natasha Dr, San Jose, CA',
//     description: 'Single family house',
//     price: '$ 2,325,000',
//     type: 'home',
//     bed: 4,
//     bath: 3.5,
//     size: 500,
//     position: {
//       lat: 37.41391636421949,
//       lng: -121.94592071575907
//     }
//   }
// ]

// function toggleTrafficLayer() {
//   const trafficLayer = new google.maps.TrafficLayer()
//   trafficLayer.setMap(map)

//   trafficLayer = new google.maps.TrafficLayer()
//   trafficLayer.setMap(map)
// }
async function initMap() {
  const { Map, InfoWindow } = await google.maps.importLibrary('maps')
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker')
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: { lat: 13.76836446790013, lng: 100.55145680397254 }
  })
  const infoWindow = new google.maps.InfoWindow({
    content: '',
    disableAutoPan: true
  })

  const markers = locations.map((position) => {
    const imageUrl = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    const marker = new google.maps.Marker({
      position,
      map: map,
      icon: {
        url: imageUrl,
        scaledSize: new google.maps.Size(50, 50)
      }
    })
    marker.addListener('click', () => {
      infoWindow.setContent(`${position.lat}, ${position.lng}`)
      infoWindow.open(map, marker)
    })
    return marker
  })
  const markers_2 = locations_2.map((position) => {
    const imageUrl = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    const marker_2 = new google.maps.Marker({
      position,
      map: map,
      icon: imageUrl
    })
    marker_2.addListener('click', () => {
      infoWindow.setContent(`${position.lat}, ${position.lng}`)
      infoWindow.open(map, marker_2)
    })
    return marker_2
  })
  const markers_3 = locations.map((position, index) => {
    const blueIconUrl = "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><circle cx='15' cy='15' r='10' fill='blue'/></svg>"
    const redIconUrl = "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><circle cx='15' cy='15' r='10' fill='red'/></svg>"
    const iconUrl = (index === 0 || index === 1) ? redIconUrl : blueIconUrl
    const marker = new google.maps.Marker({
      position,
      map: map,
      icon: {
        url: iconUrl,
        scaledSize: new google.maps.Size(20, 20)
      }
    })
    marker.addListener('click', () => {
      infoWindow.setContent(`${position.lat}, ${position.lng}`)
      infoWindow.open(map, marker)
    })

    // Return the marker
    return marker
  })


  const markers_4 = locations_4.map((position, index) => {
    // กำหนด URL ของไอคอนสำหรับแต่ละตำแหน่ง
    let imageUrl
    if (index === 0) {
        imageUrl = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png'
    } else if (index === 1) {
        imageUrl = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    } else if (index === 2) {
        imageUrl = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/icon.png'
    } else {
        imageUrl = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/icon.png'
    }

    // กำหนดตัวเลือกสำหรับเครื่องหมาย
    const markerOptions = {
        position: position,
        map: map,
        icon: {
            url: imageUrl,
            size: new google.maps.Size(40, 40),
            rotation: 45
        }
    }

    // สร้างเครื่องหมาย
    const marker = new google.maps.Marker(markerOptions)
    marker.addListener('click', () => {
        infoWindow.setContent(`${position.lat}, ${position.lng}`)
        infoWindow.open(map, marker)
    })

    return marker
})




  const markerCluster_1 = new MarkerClusterer({ markers: markers, map: map })
  const markerCluster_2 = new MarkerClusterer({ markers: markers_2, map: map })
  const markerCluster_3 = new MarkerClusterer(
    {
      markers: markers_3,
      map: map
    })
  const markerCluster_4 = new MarkerClusterer(
    {
      markers: markers_4,
      map: map
    })
  const polygon = new google.maps.Polygon({
    paths: polygon_locations,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    title: 'asdw'
  })
  polygon.setMap(map)

  const polygon_2 = new google.maps.Polygon({
    paths: polygon_locations_2,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    title: 'asdw'
  })
  polygon_2.setMap(map)

  const trafficLayer = new google.maps.TrafficLayer()
  trafficLayer.setMap(map)
  // return trafficLayer

  const styleControl = document.getElementById('style-selector-control')
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl)
  const styleSelector = document.getElementById('style-selector')
  styleSelector.addEventListener('change', () => {
    const selectedStyle = styleSelector.value

    // ล้างการแสดงผลเดิมทั้งหมด
    polygon.setVisible(false)
    polygon_2.setVisible(false)
    markerCluster_1.clearMarkers()
    markerCluster_2.clearMarkers()

    // แสดงทุกเขตและ marker cluster ที่เกี่ยวข้อง
    if (selectedStyle === 'all_polygon_markerCluster') {
      polygon.setVisible(true)
      polygon_2.setVisible(true)
      markerCluster_1.addMarkers(markers)
      markerCluster_2.addMarkers(markers_2)
    } else if (selectedStyle === 'polygon_markerCluster_1') {
      polygon.setVisible(true)
      markerCluster_1.addMarkers(markers)
    } else if (selectedStyle === 'polygon_markerCluster_2') {
      polygon_2.setVisible(true)
      markerCluster_2.addMarkers(markers_2)
    }
  })


  const trafficLayerControl = document.getElementById('trafficLayer-control')
  trafficLayerControl.addEventListener('change', () => {
    const selectedOption = trafficLayerControl.value

    if (selectedOption === 'trafficLayer_off') {
      trafficLayer.setMap(null)
    } else if (selectedOption === 'trafficLayer_on') {
      trafficLayer.setMap(map)
    }
  })

  google.maps.event.addListener(map, 'click', function (event) {
    const clickedPosition = event.latLng
    const cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: clickedPosition,
      radius: 5000
    })

    // เมื่อคลิกที่ปุ่ม 'ลบ Circle'
    document.getElementById('clearCircleButton').addEventListener('click', function () {
      if (cityCircle) {
        cityCircle.setMap(null)
      }
    })

    // แสดง marker ที่ตำแหน่งอยู่ภายในรัศมีของวงกลม
    locations_2.forEach(function (location) {
      const markerPosition = new google.maps.LatLng(location.lat, location.lng)
      const distance = google.maps.geometry.spherical.computeDistanceBetween(clickedPosition, markerPosition)
      if (distance <= 5000) { // ถ้าระยะห่างน้อยกว่าหรือเท่ากับรัศมีของวงกลม
        const marker = new google.maps.Marker({
          position: markerPosition,
          map: map
        })
      }
    })
  })



}
const polygon_locations = [
  { lat: 13.798797, lng: 100.578249 },
  { lat: 13.874099, lng: 100.656652 },
  { lat: 13.819399, lng: 100.722663 },
  { lat: 13.76205, lng: 100.69966 }
]
const polygon_locations_2 = [
  { lat: 13.760583, lng: 100.519245 },
  { lat: 13.7249984, lng: 100.4727048 },
  { lat: 13.6546576, lng: 100.5213435 },
  { lat: 13.7193202, lng: 100.5801834 }
]
const locations_2 = [
  { lat: 13.7402848, lng: 100.5071928 },
  { lat: 13.7388676, lng: 100.5258328 },
  { lat: 13.6914672, lng: 100.511726 },
  { lat: 13.7119414, lng: 100.5437914 }
]
const locations_4 = [
  { lat: 13.846611, lng: 100.4442729 },
  { lat: 14.0057729, lng: 100.4577797 },
  { lat: 13.9381999, lng: 100.529714 },
  { lat: 13.8456833, lng: 100.594655 }
]
const locations = [
  { lat: 13.8103625, lng: 100.661206 },
  { lat: 13.7961138, lng: 100.6912003 },
  { lat: 13.8280031, lng: 100.6849357 },
  { lat: 13.811445, lng: 100.6159935 }
]

// async function initMap() {
//   const mapElement = document.getElementById('map')

//   const map = new google.maps.Map(mapElement, {
//     zoom: 10,
//     center: { lat: 13.76836446790013, lng: 100.55145680397254 },
//     mapId: 'DEMO_MAP_ID'
//   })

//   const infoWindow = new google.maps.InfoWindow({
//     content: '',
//     disableAutoPan: true
//   })

//   const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

//   // สร้าง marker ใหม่โดยใช้ API มาตรฐาน
//   const markers = locations.map((location, i) => {
//     const marker = new google.maps.Marker({
//       position: location,
//       label: labels[i % labels.length],
//       map: map
//     })

//     marker.addListener('click', () => {
//       infoWindow.setContent(`${location.lat}, ${location.lng}`)
//       infoWindow.open(map, marker)
//     })

//     return marker
//   })

//   // สร้าง polygon
//   const polygon = new google.maps.Polygon({
//     paths: polygon_locations,
//     strokeColor: '#FF0000',
//     strokeOpacity: 0.8,
//     strokeWeight: 2,
//     fillColor: '#FF0000',
//     fillOpacity: 0.35,
//     map: map
//   })
// }

// const locations = [
//   { lat: 13.879517, lng: 100.567178 },
//   { lat: 13.9078456, lng: 100.492677 },
//   { lat: 13.8750386, lng: 100.6578155 }
// ]

// const polygon_locations = [
//   { lat: 13.979517, lng: 100.667178 },
//   { lat: 13.9978456, lng: 100.992677 },
//   { lat: 13.9750386, lng: 100.9578155 }
// ]

</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar :title="$t('map')">
        <template #right>
          <SwitchLang />
          <UTooltip text="Notifications" :shortcuts="['N']">
            <UButton color="gray" variant="ghost" square @click="isNotificationsSlideoverOpen = true">
              <UChip color="red" inset>
                <UIcon name="i-heroicons-bell" class="w-5 h-5" />
              </UChip>
            </UButton>
          </UTooltip>
          <!-- <UDropdown :items="items">
            <UButton
              icon="i-heroicons-plus"
              size="md"
              class="ml-1.5 rounded-full"
            />
          </UDropdown> -->
        </template>
      </UDashboardNavbar>
      <UContainer class="map-container">
        <div id="style-selector-control" class="map-control">
          <select id="style-selector" class="selector-control">
            <option value="all_polygon_markerCluster">
              แสดงข้อมูลตามเขต
            </option>
            <option value="polygon_markerCluster_1">
              polygon_markerCluster_1
            </option>
            <option value="polygon_markerCluster_2">
              polygon_markerCluster_2
            </option>
          </select>
          <select id="trafficLayer-control">
            <option value="trafficLayer_off">
              Traffic Layer Off
            </option>
            <option value="trafficLayer_on" selected>
              Traffic Layer On
            </option>
          </select>
          <button id="clearCircleButton">
            ลบ Circle
          </button>
        </div>
        <div id="map" class="full-size-map" />
      </UContainer>
      <UDashboardPanelContent />
    </UDashboardPanel>
  </UDashboardPage>
</template>

<style>
/* ตั้งค่า container ให้มีอัตราส่วน 16:9 */
/* .map-container {
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; */
/* 16:9 Aspect Ratio */
/* } */

.map-control {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px rgba(33, 33, 33, 0.4);
  font-family: "Roboto", "sans-serif";
  margin: 10px;
  /* display: none; */
}

.selector-control {
  font-size: 14px;
  line-height: 30px;
  padding-left: 5px;
  padding-right: 5px;
}

.full-size-map {
  position: absolute;
  top: 7%;
  left: 0;
  bottom: 0;
  right: 0;
  height: 93%;
  /* Adjust if needed */
}

:root {
  --building-color: #FF9800;
  --house-color: #0288D1;
  --shop-color: #7B1FA2;
  --warehouse-color: #558B2F;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.property {
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 50%;
  color: #263238;
  display: flex;
  font-size: 14px;
  gap: 15px;
  height: 30px;
  justify-content: center;
  padding: 4px;
  position: relative;
  position: relative;
  transition: all 0.3s ease-out;
  width: 30px;
}

.property::after {
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-top: 9px solid #FFFFFF;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  top: 95%;
  transform: translate(-50%, 0);
  transition: all 0.3s ease-out;
  width: 0;
  z-index: 1;
}

.property .icon {
  align-items: center;
  display: flex;
  justify-content: center;
  color: #FFFFFF;
}

.property .icon svg {
  height: 20px;
  width: auto;
}

.property .details {
  display: none;
  flex-direction: column;
  flex: 1;
}

.property .address {
  color: #9E9E9E;
  font-size: 10px;
  margin-bottom: 10px;
  margin-top: 5px;
}

.property .features {
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.property .features>div {
  align-items: center;
  background: #F5F5F5;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  font-size: 10px;
  gap: 5px;
  padding: 5px;
}

/*
 * Property styles in highlighted state.
 */
.property.highlight {
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  height: 80px;
  padding: 8px 15px;
  width: auto;
}

.property.highlight::after {
  border-top: 9px solid #FFFFFF;
}

.property.highlight .details {
  display: flex;
}

.property.highlight .icon svg {
  width: 50px;
  height: 50px;
}

.property .bed {
  color: #FFA000;
}

.property .bath {
  color: #03A9F4;
}

.property .size {
  color: #388E3C;
}

/*
 * House icon colors.
 */
.property.highlight:has(.fa-house) .icon {
  color: var(--house-color);
}

.property:not(.highlight):has(.fa-house) {
  background-color: var(--house-color);
}

.property:not(.highlight):has(.fa-house)::after {
  border-top: 9px solid var(--house-color);
}

/*
 * Building icon colors.
 */
.property.highlight:has(.fa-building) .icon {
  color: var(--building-color);
}

.property:not(.highlight):has(.fa-building) {
  background-color: var(--building-color);
}

.property:not(.highlight):has(.fa-building)::after {
  border-top: 9px solid var(--building-color);
}

/*
 * Warehouse icon colors.
 */
.property.highlight:has(.fa-warehouse) .icon {
  color: var(--warehouse-color);
}

.property:not(.highlight):has(.fa-warehouse) {
  background-color: var(--warehouse-color);
}

.property:not(.highlight):has(.fa-warehouse)::after {
  border-top: 9px solid var(--warehouse-color);
}

/*
 * Shop icon colors.
 */
.property.highlight:has(.fa-shop) .icon {
  color: var(--shop-color);
}

.property:not(.highlight):has(.fa-shop) {
  background-color: var(--shop-color);
}

.property:not(.highlight):has(.fa-shop)::after {
  border-top: 9px solid var(--shop-color);
}
</style>
