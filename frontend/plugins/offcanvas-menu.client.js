export default () => {
  if (process.client) {
    $(document).ready(function () {
      $('.canvas_open a').on('click', function () {
        $('.offcanvas_menu_wrapper').addClass('active');
      });

      $('.canvas_close a').on('click', function () {
        $('.offcanvas_menu_wrapper').removeClass('active');
      });
    });
  }
}
