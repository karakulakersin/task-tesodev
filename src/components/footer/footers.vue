<template>
  <div class="footerMain d-flex justify-content-space-between">
    <div class="footerImage"><img height="200" src="@/assets/images/footerImage.png" /></div>
    <div class="m-1 footerAdress">
      <span>
        <span> İletişim </span> <br />
        Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
        Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
      </span>
      <br />
      <span> Email: bilgi@tesodev.com </span>
    </div>
    <div class="maps">   <GMapMap
      :center="center"
      :zoom="17"
      map-type-id="terrain"
      style="width: 700px; height: 240px"
  >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap></div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      center: { lat: 41.01928, lng: 28.89096 },
      markers: [
        {
          position: {
            lat: 41.01913,
            lng: 28.89096,
          },
        }, // Along list of clusters
      ],
    };
  },
};
</script>
<style scoped>
*{
    color: white;
}
.maps{
    padding: 10px;
    margin-right: 2rem;
}
.footerMain {
  padding: 1rem;
  background-color: #657fb5;
  height: 33vh;
}
.footerImage {
  margin: 3rem;
  margin-right: 0.5rem;
}
.footerAdress {
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
}
</style>
