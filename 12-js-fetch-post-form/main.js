const newPostForm = document.getElementById ('new-post-form');
const postTitle = document.getElementById ('post-title');
const postBody = document.getElementById ('post-body');
const responseContainer = document.getElementById ('response-container');

newPostForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = postTitle.value;
    const body = postBody.value;

    const postData = {
        title : title,
        body : body,
        userId : 1
    };
    console.log ('Form submitted! Page did not reload.');

    sendPostRequest (postData);
});

async function sendPostRequest(postData) {
    console.log('Sending data to API....');

    const fetchOptions = {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(postData)
    };
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts', fetchOptions);
        if (!response.ok){
            throw new Error (`Error! Status : ${response.status}` )
        };
        const responseData = await response.json();

        console.log('Server response :', responseData);

        responseContainer.innerHTML = `
        <h3>Post Created (ID: ${responseData.id})</h3>
        <p>Title : ${responseData.title}</p>
        `;


    } catch (error){
        console.log ('Failed to send post : ', error);
        responseContainer.innerHTML = `<p>Error : ${error.message}</p>`;
    }

    
}