
$(document).ready(function () {
    $(".container").append('<div id="colorbox"><div>Red</div><div>Blue</div><div>Green</div><div>Purple</div><div>Lightblue</div><div>Orange</div></div>')
    $("#colorbox").addClass('p-5 mt-3 d-flex justify-content-between flex-wrap');
    $("#colorbox").css({ border: '2px solid blue' })
    $("#colorbox div").addClass('pt-1 pb-5 pl-2 mb-5')
    $("#colorbox div").css({ backgroundColor: 'yellow', width: '150px', height: '70px' })
    $("#colorbox div:nth-child(1)").attr('id', 'red');
    $("#colorbox div:nth-child(2)").attr('id', 'blue');
    $("#colorbox div:nth-child(3)").attr('id', 'green');
    $("#colorbox div:nth-child(4)").attr('id', 'purple');
    $("#colorbox div:nth-child(5)").attr('id', 'lightblue');
    $("#colorbox div:nth-child(6)").attr('id', 'orange');

    var buttonDiv = document.createElement('div')
    buttonDiv.id = 'buttonDiv'
    buttonDiv.classList = 'd-flex justify-content-center mt-3 mb-5'
    $(".container").append(buttonDiv);

    var button = document.createElement('button');
    button.innerText = 'Execute JQuery';
    button.id = 'myButton';
    button.style.cursor = 'pointer'
    buttonDiv.append(button);

    var paragraph1 = document.createElement('p');
    paragraph1.id = 'paragraph1';
    paragraph1.classList = 'ml-4 mr-5'
    paragraph1.style.textAlign = 'justify'
    paragraph1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sagittis libero sit amet varius. Donec ultricies dapibus nunc, eu maximus massa luctus in. Nulla ut urna a massa vehicula semper. Aliquam dictum tellus eu ipsum cursus tempor. Donec ut ornare magna, vitae feugiat sapien. <span>Praesent ultricies metus sit amet augue semper, lobortis tristique lectus malesuada.</span> Nulla facilisi.';
    $(".container").append(paragraph1);
    $("span").addClass('text-danger');

    var paragraph2 = document.createElement('p');
    paragraph2.id = 'paragraph2';
    paragraph2.classList = 'ml-4 mr-5 mt-5'
    paragraph2.style.textAlign = 'justify'
    paragraph2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sagittis libero sit amet varius. Donec ultricies dapibus nunc, eu maximus massa luctus in. Nulla ut urna a massa vehicula semper. Aliquam dictum tellus eu ipsum cursus tempor. Donec ut ornare magna, vitae feugiat sapien. Praesent ultricies metus sit amet augue semper, lobortis tristique lectus malesuada. Nulla facilisi.';
    $(".container").append(paragraph2);

    var paragraph3 = document.createElement('p');
    paragraph3.id = 'paragraph3';
    paragraph3.classList = 'ml-4 mr-5 mt-5 mb-5';
    paragraph3.style.textAlign = 'justify';
    paragraph3.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sagittis libero sit amet varius. Donec ultricies dapibus nunc, eu maximus massa luctus in. Nulla ut urna a massa vehicula semper. Aliquam dictum tellus eu ipsum cursus tempor. Donec ut ornare magna, vitae feugiat sapien. Praesent ultricies metus sit amet augue semper, lobortis tristique lectus malesuada. Nulla facilisi.';
    $(".container").append(paragraph3);

    var hrTag = document.createElement('hr');
    hrTag.style.color = 'black';
    hrTag.style.border = '1px solid black';
    $(".container").append(hrTag);

    var lastParagraph = document.createElement('p');
    lastParagraph.id = 'lastParagraph';
    lastParagraph.innerHTML = '>> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sagittis libero sit amet varius.'
    $(".container").append(lastParagraph);

    $('button').click(function () {
        if (button.innerText === 'Execute JQuery') {
            button.innerText = 'Undo Excution';
            $("#colorbox").css({ border: '10px solid pink' })
            $("#red").css({ backgroundColor: 'red', border: '4px solid blue', color: 'green', fontSize: '25px' })
            $("#blue").css({ backgroundColor: 'blue', border: '4px solid blue', fontStyle: 'italic' })
            $("#green").css({ backgroundColor: 'green', border: '4px solid blue' })
            $("#purple").css({ backgroundColor: 'purple', border: '4px solid blue', fontStyle: 'italic' })
            $("#lightblue").css({ backgroundColor: 'lightblue', border: '4px solid blue' })
            $("#orange").css({ backgroundColor: 'orange', border: '4px dashed blue', fontStyle: 'italic' })
            $("#paragraph1,#paragraph2,#paragraph3").css({ color: 'blue' })
            $("span").removeClass('text-danger')
            $("span").addClass('text-success')
        } else if (button.innerText === 'Undo Excution') {
            button.innerText = 'Execute JQuery';
            $("#colorbox").css({ border: '2px solid blue' })
            $("#colorbox div").css({ backgroundColor: 'yellow', border: 'none', color: 'black', fontSize: '16px' })
            $("#blue").css({ fontStyle: 'normal' })
            $("#purple").css({ fontStyle: 'normal' })
            $("#orange").css({ fontStyle: 'normal' })
            $("#paragraph1,#paragraph2,#paragraph3").css({ color: 'black' })
            $("span").addClass('text-danger')
            $("span").removeClass('text-success')
        }
    });
});

