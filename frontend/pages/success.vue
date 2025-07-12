<template>

    <div>
        <Header />
        <div class="container text-center py-5">
            <div class="alert alert-success" role="alert">
                🎉 Your order has been placed <strong>successfully</strong>!
            </div>
            <p>Thank you for shopping with us.</p>
            <nuxt-link to="/" class="btn btn-primary mt-3">Go to Homepage</nuxt-link>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Order Success'
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>
