$(document).ready(function () {
    $('#leftmenuCollapse').on('click', function () {
        $('#left-menu').toggleClass('active');
        $('#content-box').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('[data-toggle="tooltip"]').tooltip();
});
// Style Switcher
$(document).ready(function() {
    $('#styleOptions').styleSwitcher();
});
//Notifications
$('#notify-success').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-check',
        title: '<strong>Success!</strong>',
        message: 'A simple success notification - check it out!',
    }, {
        type: 'success'
    });
});
$('#notify-error').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-exclamation',
        title: '<strong>Error!</strong>',
        message: 'A simple danger notification - check it out!',
    }, {
        type: 'danger'
    });
});
$('#notify-warning').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-exclamation-triangle',
        title: '<strong>Warning!</strong>',
        message: 'A simple warning notification - check it out!',
    }, {
        type: 'warning'
    });
});
$('#notify-info').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-info-circle',
        title: '<strong>Info!</strong>',
        message: 'A simple info notification - check it out!',
    }, {
        type: 'info'
    });
});

$('#notify-success-tl').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-check',
        title: '<strong>Success!</strong>',
        message: 'A simple success notification - check it out!',
    }, {
         placement: {
            from:'top',
            align: 'left'
        },
        type: 'success'
    });
});
$('#notify-error-tr').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-exclamation',
        title: '<strong>Error!</strong>',
        message: 'A simple danger notification - check it out!',
    }, {
        placement: {
            from:'top',
            align: 'right'
        },
        type: 'danger'
    });
});
$('#notify-warning-bl').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-exclamation-triangle',
        title: '<strong>Warning!</strong>',
        message: 'A simple warning notification - check it out!',
    }, {
        placement: {
            from:'bottom',
            align: 'left'
        },
        type: 'warning'
    });
});
$('#notify-info-br').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-info-circle',
        title: '<strong>Info!</strong>',
        message: 'A simple info notification - check it out!',
    }, {
        placement: {
            from:'bottom',
            align: 'right'
        },
        type: 'info'
    });
});

$('#notify-success-bc').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-info-circle',
        title: '<strong>Info!</strong>',
        message: 'A simple info notification - check it out!',
    }, {
        placement: {
            from:'bottom',
            align: 'center'
        },
        type: 'success'
    });
});
$('#notify-error-tc').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-info-circle',
        title: '<strong>Info!</strong>',
        message: 'A simple info notification - check it out!',
    }, {
        placement: {
            from:'top',
            align: 'center'
        },
        type: 'danger'
    });
});
$('#notify-success-afade').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-check',
        title: '<strong>Success!</strong>',
        message: 'A simple success notification - check it out!',
    }, {
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        type: 'success'
    });
});
$('#notify-error-abounce').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-exclamation',
        title: '<strong>Error!</strong>',
        message: 'A simple danger notification - check it out!',
    }, {
        animate: {
            enter: 'animated bounceInLeft',
            exit: 'animated bounceOutRight'
        },
        type: 'danger'
    });
});
$('#notify-warning-azoom').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-exclamation-triangle',
        title: '<strong>Warning!</strong>',
        message: 'A simple warning notification - check it out!',
    }, {
        animate: {
            enter: 'animated zoomInDown',
            exit: 'animated zoomOutDown'
        },
        type: 'warning'
    });
});
$('#notify-info-aflip').on('click', function (event) {
    event.preventDefault();
     $.notify({
        icon: 'fas fa-info-circle',
        title: '<strong>Info!</strong>',
        message: 'A simple info notification - check it out!',
    }, {
        animate: {
            enter: 'animated flipInX',
            exit: 'animated flipOutX'
        },
        type: 'info'
    });
});