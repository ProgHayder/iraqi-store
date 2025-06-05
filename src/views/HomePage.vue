<script>
import NavBar from "@/components/Navbar";
import WhatsNew from "@/components/WhatsNew";

export default {
  name: "HomePage",
  components: {
    NavBar,
    WhatsNew
  },
};
</script>
<template>
  <div class="home-page">
    <NavBar />
    <WhatsNew />
  </div>
</template>
<style scoped>

</style>