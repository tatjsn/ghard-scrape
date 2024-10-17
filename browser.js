async function job() {
    var title = document.querySelector('h1').textContent;
    var posts = [...document.querySelectorAll('li[id^=res_]')]
        .filter(elem => elem.id.match(/^res_\d+$/))
        .map(post => post.querySelector('div.threadview_response_body'))
        .map((elem, index) => ({
            id: index + 2,
            body: elem.textContent.trim(),
        }));
    var res = await fetch(
        'http://localhost:8080/',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, posts })
        }
    );
    await res.json();
}

job();
