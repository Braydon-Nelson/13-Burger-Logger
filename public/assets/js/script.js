$(document).ready(function () {
    // body...

    $('#submit-button').on('click', function () {

        var burgerData = {
            burger_name: $('#new_burger').val().trim()
        }

        // Send the POST request.
        $.ajax("/burger/create", {
            type: "POST",
            data: burgerData
        }).then(function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        });


    });

    $('.devour-button').on('click', function () {
        console.log("EAT");

        var devourData = {
            id: $(this).attr('data-id')
        }

        // Send the POST request.
        $.ajax("/burger/eat", {
            type: "POST",
            data: devourData
        }).then(function () {
            console.log("updated new burger to deveour!");
            // Reload the page to get the updated list
            location.reload();
        });

    });

    $('.delete-button').on('click', function () {

        var deleteData = {
            id: $(this).attr('data-id')
        }

        // Send the POST request.
        $.ajax("/burger/delete", {
            type: "POST",
            data: deleteData
        }).then(function () {
            console.log("updated new burger to delete!");
            // Reload the page to get the updated list
            location.reload();
        });



    });













});
