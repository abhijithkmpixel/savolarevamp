$(document).ready(function () {
    function submitShareCalculatorForm() {
        if ($("#userShareCapitalInput").val() != "") {
            var formData = {
                numbers: $("#userShareCapitalInput").val(),
            };

            $.ajax({
                type: "Post",
                url: "/api/shares",
                data: formData,
                dataType: "json",
                success: function (response) {
                    $(".share__calculator__block__details").show();

                    setTimeout(function () {
                        const targetSection = $(".share__calculator__block__details");
                        const headerHeight = $("header").outerHeight(); // Adjust if your header selector differs

                        $("html, body").animate(
                            {
                                scrollTop: targetSection.offset().top - headerHeight,
                            },
                            500
                        );
                    }, 200);
                    $("#writtenOffShares").text(response.data.writtenOffShares);
                    $("#savolaSharesAfterCapitalReduction").text(
                        response.data.savolaSharesAfterCapitalReduction
                    );
                    $("#roundedSavolaSharesAfterCapitalReduction").text(
                        response.data.roundedSavolaSharesAfterCapitalReduction
                    );
                    $(
                        "#remainingFractionalSharesOfSavolaToBeCompensatedInCash"
                    ).text(
                        response.data
                            .remainingFractionalSharesOfSavolaToBeCompensatedInCash
                    );
                    $("#numberOfAlmaraiShares").text(
                        response.data.numberOfAlmaraiShares
                    );
                    $("#roundedAlmaraiSharesPostDistribution").text(
                        response.data.roundedAlmaraiSharesPostDistribution
                    );
                    $(
                        "#remainingFractionalSharesOfAlmaraiToBeCompensatedInCash"
                    ).text(
                        response.data
                            .remainingFractionalSharesOfAlmaraiToBeCompensatedInCash
                    );
                },
                error: function (xhr, status, error) {
                    console.error("Error :", error);
                },
            });
        }
    }
    $("#userShareCapitalInput").keypress(function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default Enter key action
            submitShareCalculatorForm();
        }
    });
    $("#btngetShares").on("click", function () {
        submitShareCalculatorForm();
    });
    $("#userShareCapitalInput").on("input", function () {
        var inputValue = $(this).val();
        var numericValue = inputValue.replace(/[^0-9]/g, "");
        $(this).val(numericValue);
    });
});
