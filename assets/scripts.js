$(
    function(){
        $("#hamburger-icon").click(
            function(){
                $("#sidenav-overlay").toggle(
                    function() {
                        if ($("#sidenav-overlay").is(':visible')) {
                            $("#bi-hb").removeClass("d-absolute");
                            $("#bi-hb").addClass("d-none");

                            $("#bi-x").removeClass("d-none");
                            $("#bi-x").addClass("d-absolute");
                        } else {
                            $("#bi-x").removeClass("d-absolute");
                            $("#bi-x").addClass("d-none");

                            $("#bi-hb").removeClass("d-none");
                            $("#bi-hb").addClass("d-absolute");
                        }
                    }
                );

                $("#navbrand").toggle("fast");
            }
        );

        $("#dropdown-toggler").click(
            function(){
                $("#nav-dropdown").children().toggle(
                    function() {
                        if ($("#nav-dropdown").children().is(':visible')) {
                            $("#dropdown-caret").removeClass("bi-caret-down-fill");
                            $("#dropdown-caret").addClass("bi-caret-up-fill");
                        } else {
                            $("#dropdown-caret").removeClass("bi-caret-up-fill");
                            $("#dropdown-caret").addClass("bi-caret-down-fill");
                        }
                    }
                );
            }
        );
    }
);