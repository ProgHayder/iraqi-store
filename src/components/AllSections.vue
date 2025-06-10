<script>
export default {
    name: 'AllSections',
    data() {
        return {
            sections: [
                { name: 'Electronics', description: 'Latest gadgets and devices.' },
                { name: 'Fashion', description: 'Trendy clothing and accessories.' },
                { name: 'Home & Kitchen', description: 'Essentials for your home.' },
                { name: 'Sports & Outdoors', description: 'Gear for your adventures.' },
                { name: 'Health & Beauty', description: 'Products for your well-being.' },
                { name: 'Toys & Games', description: 'Fun for all ages.', image: 'toys-games.jpg' },
                { name: 'Books', description: 'Explore new worlds.' },
                { name: 'Automotive', description: 'Car accessories and parts.' }
            ]
        }
    },
    methods: {
        changeEndpoint(endpoint) {
            const baseUrl = window.location.origin;
            window.location.href = baseUrl + endpoint
        },
    }
}
</script>
<template>
    <div class="all-sections">
        <h1>All Sections</h1>
        <div class="sections-container">
            <div class="section-item" 
                 v-for="(section, index) in sections" 
                 :key="index" 
                 @click="changeEndpoint(`/sections/${section.name.toLowerCase()}`)">
                <h2>{{ section.name }}</h2>
                <p>{{ section.description }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.all-sections {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.sections-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}
.section-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    width: 200px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}
.section-item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.section-item img {
    width: 100%;
    height: auto;
    border-radius: 4px;
}
.section-item h2 {
    margin: 10px 0;
    font-size: 1.2em;
}
.section-item p {
    font-size: 0.9em;
    color: #666;
}
</style>