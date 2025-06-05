import axios from 'axios';

const state = {
    products: []
};
const getters = {
    allProducts: (state) => state.products,
};
const actions = {
    async fetchProducts({ commit }) {
        try {
            const response = await axios.get('/api/products');
            commit('setProducts', response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },
    async goToProduct({ commit }, productId) {
        try {
            const response = await axios.get(`/api/products/${productId}`);
            commit('setProducts', [response.data]);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }
};
const mutations = {
    setProducts: (state, products) => {
        state.products = products;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};
