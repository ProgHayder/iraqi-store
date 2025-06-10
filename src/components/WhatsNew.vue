<script>
export default {
    name: 'WhatsNew',
    data() {
        return {
            products: [
                { name: 'Product 1', price: 7.99 },
                { name: 'Product 2', price: 7.99 },
                { name: 'Product 3', price: 7.99 },
                { name: 'Product 4', price: 7.99 },
                { name: 'Product 5', price: 7.99 },
            ]
        }
    },
    methods: {
        handleProductClick(index) {
            window.location.href = window.location.origin + `/products/${index + 1}`;
        }
    }
}
</script>
<template>
    <div class="section-header">
        <h1>What's New</h1>
        <div class="products-container">
            <div class="product-item" 
            v-for="(product, index) in products" 
            :key="index" @click="handleProductClick(index)">
                <h2>{{ product.name }}</h2>
                <span>{{ product.price }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.section-header {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.products-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
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