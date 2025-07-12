<template>
    <div>
        <Header />
        <Slider />
        <Banner />
        <Products />
        <Footer />


    </div>



</template>

<script>
import bus from '~/plugins/bus.js';
import Products from '../components/Products.vue';
import Banner from '../components/Banner.vue';

export default {
    //components: { slider },
    data() {
        return {
            cart: [],
            _itemCount: 0,
            itemCounts: 0,
            showCategories: false,
            showMenu: false
        }
    },
    mounted() {

        this.loadCart();
        bus.$on('updateCart', (updatedCart) => {
            this.loadCart();
        });
    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },

        itemCount: {
            get() {
                return this._itemCount;
            },
            set(value) {
                this._itemCount = value;
            },
        },

    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
        },
        closepopup() {
            $(".modal_share").fadeOut();
        },
        loadCart() {
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }

            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            //console.log("Finally get total Cart" + itemCount);
            this.itemCounts = itemCount;
        },
        cartLink() {
            $(".cart_link p").fadeIn();
        }
    }
}
</script>

<style>
.off-canvas-mobile {
    background-color: #fff;
    z-index: 9999;
}

.sub_menu a {
    font-size: 15px;
}

.nav-link {
    color: #333;
    padding: 8px 0;
    display: block;
}

.nav-link:hover {
    color: #007bff;
}
</style>
