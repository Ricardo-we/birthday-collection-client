export const loadFormData = (form: HTMLFormElement) => {
    const formDataJson: {[key: string] : any} = {};
    new FormData(form).forEach((value, key) => {
        formDataJson[key] = value;
    });

    return formDataJson;
}