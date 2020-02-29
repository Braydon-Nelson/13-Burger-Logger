$(document).ready(function () {

    //submit button to post to db
    $('#submit-button').on('click', function () {

        var burgerData = {
            burger_name: $('#new_burger').val().trim()
        }
        $.ajax("/burger/create", {
            type: "POST",
            data: burgerData
        }).then(function () {
            console.log("created new burger");
            location.reload();
        });
    });

    //devour button to post to db
    $('.devour-button').on('click', function () {
        console.log("EAT");

        var devourData = {
            id: $(this).attr('data-id')
        }

        $.ajax("/burger/eat", {
            type: "POST",
            data: devourData
        }).then(function () {
            console.log("updated new burger to deveour!");
            location.reload();
        });
    });

    //delete button to post to db
    $('.delete-button').on('click', function () {

        var deleteData = {
            id: $(this).attr('data-id')
        }

        $.ajax("/burger/delete", {
            type: "POST",
            data: deleteData
        }).then(function () {
            console.log("updated new burger to delete!");
            location.reload();
        });
    });

});
