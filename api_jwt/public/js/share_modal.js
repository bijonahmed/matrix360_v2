function copy() {
    // Get the text field
    var copyText = document.getElementById("myInput");
    var change = document.getElementById("change_txt");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    change.innerHTML("Copied");
  }

  $(document).ready(function(){
    $(".share_btn").click(function(){
        $(".modal_share").fadeIn();
    })
    $(".close").click(function(){
        $(".modal_share").fadeOut();
    })
  })