$(document).ready(function() {
    $('#adicionar-botao').click(function() {
        const novaTarefa = $('.nome-tarefa').val();
        if (novaTarefa.trim() !== '') {
            const novoItem = $('<li></li>').text(novaTarefa);
            novoItem.click(function() {
                $(this).toggleClass('tarefa-concluida');
            });
            $('ul').append(novoItem);
            $('.nome-tarefa').val('');
        }
    });
});
