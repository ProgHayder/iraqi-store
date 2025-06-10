<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'ElectronicsPage',
    components: {
        Navbar
    },
    data() {
        return {
            products: [
                { name: 'Smartphone', description: 'Latest model with advanced features.', price: '699.99 $' },
                { name: 'Laptop', description: 'High performance laptop for work and play.', price: '1299.99 $' },
                { name: 'Smartwatch', description: 'Track your fitness and stay connected.', price: '199.99 $' },
                { name: 'Headphones', description: 'Noise-cancelling headphones for immersive sound.', price: '149.99 $' }
            ]
        };
    },
    methods: {
        changeEndpoint(endpoint) {
            const baseUrl = window.location.origin;
            window.location.href = baseUrl + endpoint;
        },
    }
}
</script>
<template>
    <Navbar />
    <div class="electronics">
        <h1>Electronics</h1>
        <div class="products-container">
            <div class="product-item" 
                 v-for="(product, index) in products" 
                 :key="index" 
                 @click="changeEndpoint(`/product/${product.name}`)">
                <h2>{{ product.name }}</h2>
                <p>{{ product.description }}</p>
                <span>{{ product.price }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.electronics {
    padding: 20px;
}
.products-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.product-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    width: 250px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}
.product-item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>