<script>
export default {
  name: "NavBar",
  methods: {
    handleSearch(event) {
      const query = event.target.value;
      console.log("Search query:", query);
    },
    handleLogoClick() {
        const homeUrl = '/';
        window.location.href = homeUrl;
    }
  },
};
</script>
<template>
    <div class="navbar">
        <div class="logo-and-search">
            <img alt="The Iraqi Store logo" src="../assets/logo.jpg" @click="handleLogoClick">
            <div class="name-and-search">
                <span class="store-name">The Iraqi Store</span>
                <input type="text" placeholder="Search..." @input="handleSearch">
            </div>
        </div>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
        </div>
    </div>
</template>
<style scoped>
.navbar {
    height: 100px;
    background-color: bisque;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo-and-search {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.logo-and-search img {
    height: 60px;
    width: 60px;
    object-fit: cover;
    margin: 0 20px;
}
.name-and-search {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 5px;
}
.nav-links {
    display: flex;
    gap: 15px;
    padding: 0 20px;
}
.store-name {
    font-size: 24px;
    font-weight: bold;
    color: black;
}
.nav-links a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    padding: 20px 10px;
}
input[type="text"] {
    height: 25px;
    padding: 10px;
    margin: 5px 0;
    border: none;
    border-radius: 5px;
    width: 250px;
}
.navbar a:hover {
    background-color: white;
}
img:hover {
    cursor: pointer;
}
</style>