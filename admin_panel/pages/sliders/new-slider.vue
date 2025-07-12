<template>
<div>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item">
                                <router-link to="/" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">
                                <router-link to="/sliders/sliders-list">Slider List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">New</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!--end breadcrumb-->

            <!--end row-->
            <div class="row">
                <div class="col-xl-12 mx-auto">
                    <div class="card border-top border-0 border-4 border-info">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Slug</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control name" v-model="insertdata.redirect_url" id="redirect_url" placeholder="Slug">
                                            <span class="text-danger" v-if="errors.redirect_url">{{ errors.redirect_url[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Thumbnail Image</label>
                                        <div class="col-sm-9">
                                            <input type="file" value class="form-control" accept="image/png,image/jpeg" ref="files" @change="previewImage" />
                                            <span class="text-danger" v-if="errors.files">{{ errors.files[0] }}</span>
                                            <img v-if="previewUrl" :src="previewUrl" alt="Preview" class="img-fluids img_slide" />
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Status</label>
                                        <div class="col-sm-9">
                                            <select name="status" v-model="insertdata.status" class="form-select">
                                                <option value="1" selected>Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <label class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-9">
                                            <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-check-circle mr-1"></i> Submit</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
        </div>
    </div>
    <!--end page wrapper -->
</div>
</template>

<script>
export default {
    head: {
            title: 'New Slider',
        },
    data() {
        return {
            insertdata: {
                id: '',
                redirect_url: '',
                status: 1,
            },
            previewUrl: null,
            notifmsg: '',
            files: '',
            errors: {},
        }
    },
    created() {},
    methods: {
        previewImage(event) {
            this.onFileSelected();
            const file = event.target.files[0];
            this.previewUrl = URL.createObjectURL(file);
            // this.checkImageDimensionsThunbnail(file);
        },
        onFileSelected() {
            //this.file = this.$refs.file.files[0];
            this.files = this.$refs.files.files[0];
        },
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('files', this.files);
            formData.append('redirect_url', this.insertdata.redirect_url);
            formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/setting/insertSlider',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/sliders/sliders-list');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Your data has been successfully inserted.'
            });
        },

    },
}
</script>
<style scoped>
.img_slide {
      max-height: 500px;  
     width: 60%;  
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px #3f51b514;
    margin: 20px 0px;
    /* min-width: 350px; */
    /* margin: 10px 8px; */
    height: 100%;
}

.img_slide a {
    /* height: 100% !important; */
    width: 100%;
    display: block;
    height: 400px;
}

.img_slide a img {
    max-height: 400px;
    width: 100%;
    object-fit: cover;
    height: 100%;
}

</style>