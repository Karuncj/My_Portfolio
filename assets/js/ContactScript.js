$(document).ready(function() {
    $("#submit-button").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#comment").val();
        
        var mailtoLink = "mailto:karunchery@gmail.com"
            + "?subject=" + encodeURIComponent(subject)
            + "&body=Name: " + encodeURIComponent(name) + "%0D%0A"
            + "Email: " + encodeURIComponent(email) + "%0D%0A"
            + "Subject: " + encodeURIComponent(subject) + "%0D%0A"
            + "Message: " + encodeURIComponent(message);

        window.location.href = mailtoLink;
    });
});
