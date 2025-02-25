export const submitForm = async (formData) => {
    const response = await fetch('/server/formHandler.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        throw new Error('Failed to submit form');
    }

    return await response.json();
};
