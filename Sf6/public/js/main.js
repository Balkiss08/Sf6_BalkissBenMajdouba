const articles = document.getElementById('articles');
if (articles) {
    articles.addEventListener('click', (e) => {
        if (e.target.className === 'btn btn-danger delete-article'){

            if(confirm('Etes-vous sûr de supprimer cet article?')) {
                const id = e.target.getAttribute('data-id');
                fetch(`article/delete/${id}`, {
                    method: 'DELETE'
                }).then(res => window.location.reload());
            }
        }
    })
}