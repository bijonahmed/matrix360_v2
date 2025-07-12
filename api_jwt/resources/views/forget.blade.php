<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- title  -->
    <title>Reset Password</title>

    <!-- google fonts  -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <!-- swiper js  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="stylesheet" href="{{ asset('/assets/bootstrap-5.3.2/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/fontawesome-free-6.4.2/css/all.min.css') }}">
    <!-- style css  -->
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">


</head>

<body>


    <section class="forget_pass" style="height: 100vh;display: flex; justify-content: center; align-items: center;">
        <div class="container">
            <div class="row">
                <div class="col-md-6 m-auto">
                    <div class="login_section reset_pass" style="
                    background: #464646;
                    padding: 20px;
                    border-radius: 20px;
                ">

                        <form action="{{ url('resetPassword') }}" method="post">
                            @csrf
                            <input type="hidden" name="id" value="{{ $id }}">

                            <div class="row">
                                <div class="col-3 m-auto my-3">
                                    <img src="{{ asset('images/logo.png') }}" style="width: 100%;" alt="">
                                </div>
                            </div>

                            <h3>Reset Password</h3>
                            @if(session('message'))
                            <p>{{ session('message') }}</p>
                            @endif

                            @if($errors->any())
                            <div>
                                <ul>
                                    @foreach($errors->all() as $error)
                                    <li class="text-danger">{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                            @endif

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="input-container">
                                        <input placeholder="Password" class="input-field" type="password" id="password-field" name="password" autocomplete="off">
                                        <label for="input-field" class="input-label">Password </label>
                                        <span class="input-highlight"></span>
                                        <i toggle="#password-field" class="fa-solid fa-eye toggle-password"></i>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="input-container">
                                        <input placeholder="Retype Password" class="input-field" id="repassword-field" type="password" name="password_confirmation" autocomplete="off">
                                        <label for="input-field" class="input-label">Retype Password </label>
                                        <span class="input-highlight"></span>
                                        <i toggle="#repassword-field" class="fa-solid fa-eye toggle-password"></i>
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-6 px-auto m-auto">
                                        <div class="input-container text-center" bis_skin_checked="1">
                                            <input class="btn_submit" value="Confirm" type="submit">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <!--Jquery Cdn-->
    <script src="{{ asset('assets/bootstrap-5.3.2/js/bootstrap.bundle.js') }}"></script>
    <script>
        $(".toggle-password").click(function() {

            $(this).toggleClass("fa-eye fa-eye-slash");
            var input = $($(this).attr("toggle"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    </script>



</body>

</html>