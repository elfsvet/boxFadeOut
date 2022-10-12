// using jquery targeting the right id's to fadeOut elements
const milliseconds = 1000

$('#textInTheBox').click(() => {
  $('#textInTheBox').fadeOut(milliseconds, () => {
    $('#greenBox').fadeOut(milliseconds, () => {
      $('#grassBox').fadeOut(milliseconds, () => {
        $('#yellowBox').fadeOut(milliseconds, () => {
          $('#salmonBox').fadeOut(milliseconds, () => {
            $('#orangeBox').fadeOut(milliseconds, () => {
              $('#tangerineBox').fadeOut(milliseconds, () => {
                $('#redBox').fadeOut(milliseconds, () => {
                  $('#blackBox').fadeOut(milliseconds);
                });
              });
            });
          });
        });
      });
    });
  });
});
