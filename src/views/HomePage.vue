<script>
import NavBar from "@/components/Navbar";
import WhatsNew from "@/components/WhatsNew";
import AllSections from "@/components/AllSections";

export default {
  name: "HomePage",
  components: {
    NavBar,
    WhatsNew,
    AllSections
  },
};
</script>
<template>
  <div class="home-page">
    <NavBar />
    <WhatsNew />
    <AllSections />
  </div>
</template>
<style scoped>

</style>