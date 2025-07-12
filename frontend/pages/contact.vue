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
                                <li>contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--breadcrumbs area end-->


        <div class="contact_page_bg">
            <!--contact map start-->
            <div class="contact_map">
                <div class="map-area">
                    <div class="embed-map-responsive">
                        <div class="embed-map-container">
                            <div class="embed-map-responsive">
                                <div class="embed-map-container">
                                    <iframe class="embed-map-frame" frameborder="0" scrolling="no" marginheight="0"
                                        marginwidth="0"
                                        src="https://maps.google.com/maps?width=800&height=400&hl=en&q=6065%20Hillcroft%20Street%2C%20Suite%20%23%20511%2C%20Houston%2C%20TX%2077081.&t=&z=16&ie=UTF8&iwloc=B&output=embed"></iframe>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <!--contact map end-->
            <div class="container">
                <!--contact area start-->
                <div class="contact_area">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="contact_message content">
                                <h3>contact us</h3>

                                <ul>
                                    <li><i class="fa fa-fax"></i> Address : 6065 Hillcroft Street, Suite # 511, Houston,
                                        TX 77081.</li>
                                    <li><i class="fa fa-phone"></i> <a href="#">support@matrix360sourcing.com</a></li>
                                    <li class="d-none"><i class="fa fa-envelope-o"></i><a
                                            href="https://api.whatsapp.com/send?phone=14694221192"
                                            target="_blank">+14694221192</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="contact_message form">
                                <h3>Tell us your project</h3>
                                <form @submit.prevent="sendmail" id="otp-screen">
                                    <p>
                                        <label>Your Name (required)</label>
                                        <input name="name" placeholder="Name *" type="text"
                                            v-model="sendmailData.name" />
                                        <span class="text-danger" v-if="errors.name">{{ errors.name[0]
                                            }}</span>
                                    </p>
                                    <p>
                                        <label>Your Email (required)</label>
                                        <input name="email" placeholder="Email *" type="email"
                                            v-model="sendmailData.email" />
                                        <span class="text-danger" v-if="errors.email">{{ errors.email[0]
                                            }}</span>
                                    </p>
                                    <p>
                                        <label>Subject (required)</label>
                                        <input name="subject" placeholder="Subject *" type="text"
                                            v-model="sendmailData.subject" />
                                        <span class="text-danger" v-if="errors.subject">{{ errors.subject[0]
                                            }}</span>
                                    </p>
                                    <div class="contact_textarea">
                                        <label>Your Message (required)</label>
                                        <textarea placeholder="Message *" name="message" class="form-control2"
                                            v-model="sendmailData.messages"></textarea>
                                        <span class="text-danger" v-if="errors.messages">{{ errors.messages[0]
                                            }}</span>
                                    </div>
                                    <button type="submit">Send</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <!--contact area end-->
            </div>
        </div>

        <Footer />

    </div>
</template>

<script>
export default {
    head: {
        title: 'Contact',
    },
    data() {
        return {
            loading: false,
            notifmsg: '',
            errors: {},
            sendmailData: {
                name: '',
                email: '',
                subject: '',
                messages: '',
            },

        }
    },
    mounted() {

    },
    methods: {

        sendmail() {

            const formData = new FormData();
            formData.append('name', this.sendmailData.name);
            formData.append('email', this.sendmailData.email);
            formData.append('subject', this.sendmailData.subject);
            formData.append('messages', this.sendmailData.messages);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/unauthenticate/sendmail',
                formData, {
                headers
            }).then(response => {
                // this.loading = false;
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Successfully send your email."
                });
                //otp-screen
                $('#otp-screen')[0].reset();

            })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.loading = false;
                        console.log("---" + error.response.data.errors);
                        this.errors = error.response.data.errors;
                    }
                });

        }

    }
}
</script>
