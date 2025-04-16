<template>
    <div class="contact-page">
        <div class="contact-info-box">
            <h1>Contact Information</h1>
            <p>Phone: <a :href="'tel:' + phone">{{ phone }}</a></p>
            <p>Email: <a :href="'mailto:' + email">{{ email }}</a></p>
        </div>
        <div class="contact-form-box">
            <h2>Send me a message</h2>
            <form @submit.prevent="submitForm">
                <input type="text" v-model="name" placeholder="Your Name" required />
                <input type="email" v-model="userEmail" placeholder="Your Email" required />
                <textarea v-model="message" placeholder="Your Message" rows="4" required></textarea>
                <button type="submit">Submit</button>
            </form>
            <div v-if="responseMessage" class="response-message">{{ responseMessage }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            phone: "123-456-7890",
            email: "example@example.com",
            name: "",
            userEmail: "",
            message: "",
            responseMessage: ""
        };
    },
    methods: {
        async submitForm() {
            const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "https://example.com/api/contact";
            const payload = {
                name: this.name,
                email: this.userEmail,
                message: this.message
            };
            try {
                const response = await fetch(endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });
                if (response.ok) {
                    this.responseMessage = "Message sent successfully!";
                    this.name = "";
                    this.userEmail = "";
                    this.message = "";
                } else {
                    this.responseMessage = "Error sending message. Please try again.";
                }
            } catch (error) {
                this.responseMessage = "Error sending message. Please try again.";
            }
        }
    }
};
</script>

<style scoped>
.contact-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    color: var(--text-color);
}

.contact-info-box,
.contact-form-box {
    background: var(--box-bg, rgba(0, 0, 0, 0.5));
    padding: 1rem 2rem;
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    text-align: center;
}

.contact-info-box h1 {
    margin-bottom: 1rem;
}

.contact-form-box h2 {
    margin-bottom: 1rem;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

input,
textarea {
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background: var(--input-bg, #fff);
    color: var(--input-text, #000);
}

button {
    padding: 0.75rem;
    background: var(--button-bg, #6272a4);
    color: var(--button-text, #f8f8f2);
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    opacity: 0.9;
}

.response-message {
    margin-top: 1rem;
}
</style>