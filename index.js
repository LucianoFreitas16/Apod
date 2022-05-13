$("#botao").on("click", function (evento) {
  evento.preventDefault();
  const day = $("#data").val();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=RjZLtNHawbkvwiE7egi6cF4543vypgbZFJ1GraRh&date=${day}`,
    type: "GET",
    dataType: "json",

    success: function (result) {
  
      if (result.media_type == "image") {
        $("#imagem").html(`<img id='img' src="${result.url}"/>`);
        $("#dados").html(`${result.title}`);
      } else if (result.media_type == "other") {
        $("#imagem").html(`<img id='img' src="./error.webp"/>`);
        $("#dados").html(`${result.title}`);
      }
    },

    error: function () {
      $("#text").html(`Date:`);
      $("#div").html("Data fora do limite, insira a data correta.");
    },
  })
})
