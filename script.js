async function getJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const jsonData = await response.json();

        const { id, setup, punchline } = jsonData;

        console.log(`${id}: ${setup} ${punchline}`);
        return { id, setup, punchline };
    } catch (err) {
        console.error(err.message);
    }
}

async function updateHTML() {
    const { id, setup, punchline } = await getJoke();

    document.querySelector("#joke-id").innerHTML = `#${id}`;
    document.querySelector("#joke-section").innerHTML = `${setup} ${punchline}`;
}

updateHTML();
