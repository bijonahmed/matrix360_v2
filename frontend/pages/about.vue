<template>
    <div>
        <Header />
        <!--breadcrumbs area start-->
        <div class="breadcrumbs_area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb_content">
                            <ul>
                                <li><nuxt-link to="/">home</nuxt-link></li>
                                <li>about us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--breadcrumbs area end-->
        <!--about bg area start-->
        <div class="about_bg_area">
            <div class="container">
                <!--about section area -->
                <section class="about_section mb-60">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <figure>
                                <div class="about_thumb">
                                    <img src="/assets/img/about/about-us.png"
                                        alt="about us" style="width: 100%;">
                                </div>
                                <figcaption style="padding: 10px;">
                                    <section id="about-us" class="about-section">
                                        <p>
                                        <h3> Welcome to <strong>Matrix360 Sourcing</strong> – your trusted global
                                            partner
                                            in the supply and distribution of high-quality aircraft parts and aviation
                                            components.</h3>
                                        </p>
                                        <p>
                                            At Matrix360 Sourcing, we specialize in providing a comprehensive range of
                                            certified, traceable, and reliable aircraft parts to meet the demanding
                                            needs of the aerospace industry. Our mission is to simplify sourcing by
                                            offering a seamless and efficient procurement process tailored for airlines,
                                            MROs (Maintenance, Repair & Overhaul providers), OEMs, and aviation
                                            professionals around the world.
                                        </p>
                                        <p>
                                            With a strong network of global suppliers, a highly experienced team, and a
                                            commitment to quality and compliance, we ensure that every product we
                                            deliver meets stringent industry standards such as FAA, EASA, and ISO
                                            certifications. Whether you're in need of rotables, expendables, avionics,
                                            landing gear, engine components, or hard-to-find legacy parts, Matrix360
                                            Sourcing is equipped to fulfill your requirements with speed, accuracy, and
                                            transparency.
                                        </p>
                                        <p>
                                            We take pride in our customer-first approach, offering personalized service,
                                            24/7 support, and real-time inventory access. Our team of aviation experts
                                            works diligently to ensure the right part is delivered on time, every
                                            time—helping you minimize aircraft downtime and maintain operational
                                            excellence.
                                        </p>
                                        <p>
                                            At Matrix360 Sourcing, we don’t just sell parts—we deliver trust,
                                            efficiency, and peace of mind. Whether you're looking for new, overhauled,
                                            or serviceable components, let us be your strategic partner in navigating
                                            the complex world of aviation logistics.
                                        </p>

                                    </section>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>
                <!--about section end-->

            </div>
        </div>
        <!--about bg area end-->
        <Footer />

    </div>
</template>

<script>
export default {
    head: {
        title: 'About us',
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
