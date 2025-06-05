<script>
import { mapGetters } from 'vuex';
export default {
    name: 'WhatsNew',
    data() {
        return {
            products: [
                { name: 'New Product 1', description: 'Description of new product 1.', price: '13.99 $' },
                { name: 'New Product 2', description: 'Description of new product 2.', price: '5.99 $' },
                { name: 'New Product 3', description: 'Description of new product 3.', price: '9.99 $' },
                { name: 'New Product 4', description: 'Description of new product 4.', price: '7.99 $' }
            ]
        };
    },
    methods: {
        ...mapGetters(['goToProduct', 'setProducts']),
        handleProductClick(index) {
            this.goToProduct(index);
        }
    },
    created() {
        this.setProducts(this.products)
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
                <p>{{ product.description }}</p>
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
    overflow-x: auto;
    flex-wrap: wrap;
}
.product-item {
    background: #f9f9f9;
    border: 2px solid #eee;
    border-radius: 8px;
    padding: 16px;
    text-align: left;
    width: 300px;
}
.product-item:hover {
    background: #e0e0e0;
}
</style>