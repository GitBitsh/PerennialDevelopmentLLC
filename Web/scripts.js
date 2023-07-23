< script >
    document.getElementById('newsletter-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var email = document.getElementById('email').value;

        fetch('https://usX.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'apikey YOUR_API_KEY'
                },
                body: JSON.stringify({
                    email_address: email,
                    status: 'subscribed'
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }); <
/script>