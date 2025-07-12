<template>
    <div>
        <!--top tags area start-->
        <div class="top_tags_area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tags_content">
  <span>Top Tags:</span>
  <div class="scrolling-tags">
    <ul>
      <li><a href="#">Engines</a></li>
      <li><a href="#">Avionics</a></li>
      <li><a href="#">Landing Gear</a></li>
      <li><a href="#">Propellers</a></li>
      <li><a href="#">Cockpit Instruments</a></li>
      <li><a href="#">Fuselage Parts</a></li>
      <li><a href="#">Navigation Systems</a></li>
      <li><a href="#">Flight Controls</a></li>
      <li><a href="#">Fuel Systems</a></li>
      <li><a href="#">Hydraulics</a></li>
      <li><a href="#">Electrical Systems</a></li>
      <li><a href="#">Cabin Interiors</a></li>
      <li><a href="#">Wings</a></li>
      <li><a href="#">Landing Lights</a></li>
      <li><a href="#">Communication Systems</a></li>
      <li><a href="#">Emergency Equipment</a></li>
      <li><a href="#">Oxygen Systems</a></li>
      <li><a href="#">Braking Systems</a></li>
      <li><a href="#">Environmental Control Systems</a></li>
      <li><a href="#">Seat Assemblies</a></li>
      <li><a href="#">Flight Data Recorders</a></li>
      <li><a href="#">Anti-icing Systems</a></li>
      <!-- Repeat items for seamless loop -->
      <li><a href="#">Engines</a></li>
      <li><a href="#">Avionics</a></li>
      <li><a href="#">Landing Gear</a></li>
      <li><a href="#">Propellers</a></li>
    </ul>
  </div>
</div>
                    </div>
                </div>
            </div>
        </div>

        <section class="slider_section mb-80">
            <div class="slider_area slider_carousel owl-carousel">
                <div class="single_slider d-flex align-items-center" data-bgimg="/assets/img/slider/slider1.png">
                    <div class="container d-none">
                        <div class="slider_content">
                            <h1>Big sale off <span>Accessories Fidanza</span></h1>
                            <p>Exclusive Offer -30% Off This Week</p>
                            <a class="slider_btn" href="shop.html">Shop Now <i class="fa fa-angle-double-right"></i></a>
                        </div>
                    </div>
                </div>

                <div class="single_slider d-flex align-items-center" data-bgimg="/assets/img/slider/slider2.jpg">
                    <div class="container d-none">
                        <div class="slider_content">
                            <h1>Accessories <span>Tractor Trailer</span></h1>
                            <p>Exclusive Offer -30% Off This Week</p>
                            <a class="slider_btn" href="shop.html">Shop Now <i class="fa fa-angle-double-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="single_slider d-flex align-items-center" data-bgimg="/assets/img/slider/slider3.png">
                    <div class="container d-none">
                        <div class="slider_content">
                            <h1>High-end <span>New car interior</span></h1>
                            <p>Exclusive Offer -20% Off This Week</p>
                            <a class="slider_btn" href="shop.html">Shop Now <i class="fa fa-angle-double-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="single_slider d-flex align-items-center" data-bgimg="/assets/img/slider/slider4.jpg">
                    <div class="container d-none">
                        <div class="slider_content">
                            <h1>High-end <span>New car interior</span></h1>
                            <p>Exclusive Offer -20% Off This Week</p>
                            <a class="slider_btn" href="shop.html">Shop Now <i class="fa fa-angle-double-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    //components: { slider },
    data() {
        return {
            showCategories: false,
            showMoreCategories: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (typeof window.$ !== "undefined") {
                $(".slider_carousel").owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    nav: false,
                    dots: true,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>',
                    ],
                });

                $(".single_slider").each(function () {
                    const bg = $(this).attr("data-bgimg");
                    $(this).css("background-image", `url(${bg})`);
                });
            }
        });

    },
    computed: {


    },
    methods: {
        toggleCategories() {
            this.showCategories = !this.showCategories
        },
        toggleMoreCategories() {
            this.showMoreCategories = !this.showMoreCategories
        },
        closepopup() {
            $(".modal_share").fadeOut();
        },

    }
}
</script>

<style>
.slider_section {
    position: relative;
}

.single_slider {
    background-size: cover;
    background-position: center;
    height: 600px;
    display: flex;
    align-items: center;
    transition: background-image 0.5s ease-in-out;
}

.slider_content {
    color: #fff;
    max-width: 700px;
    padding: 40px 20px;
}

.slider_content h1 {
    font-size: 42px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 15px;
}

.slider_content h1 span {
    color: #ffb400;
}

.slider_content p {
    font-size: 18px;
    margin-bottom: 25px;
}

.slider_btn {
    background-color: #ffb400;
    color: #fff;
    padding: 12px 25px;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease;
}

.slider_btn:hover {
    background-color: #e09b00;
    color: #fff;
}

/* Responsive Media Queries */
@media (max-width: 992px) {
    .single_slider {
        height: 450px;
    }

    .slider_content h1 {
        font-size: 32px;
    }

    .slider_content p {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .single_slider {
        height: 400px;
    }

    .slider_content {
        padding: 20px;
        text-align: center;
        margin: 0 auto;
    }

    .slider_content h1 {
        font-size: 26px;
    }

    .slider_content p {
        font-size: 15px;
    }

    .slider_btn {
        padding: 10px 20px;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .single_slider {
        height: 350px;
    }

    .slider_content h1 {
        font-size: 22px;
    }

    .slider_content p {
        font-size: 14px;
    }
}

/* // */
.tags_content {
    display: flex;
    align-items: center;
    gap: 15px;
    font-family: Arial, sans-serif;
  }
  .tags_content > span {
    font-weight: bold;
    white-space: nowrap;
  }
  .scrolling-tags {
    overflow: hidden;
    white-space: nowrap;
    width: 80%; /* adjust as needed */
  }
  .scrolling-tags ul {
    display: inline-flex;
    padding: 0;
    margin: 0;
    list-style: none;
    animation: scrollLeft 60s linear infinite; /* slow speed */
  }
  .scrolling-tags li {
    margin-right: 30px;
  }
  .scrolling-tags a {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
  }
  .scrolling-tags a:hover {
     text-decoration: none; /* no underline */
  }
  
  @keyframes scrollLeft {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>
