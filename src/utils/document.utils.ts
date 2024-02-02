import { downloadURI } from "./file.utils";

export const useCharacterAsCursor = (character?: string) => {
    let size = 24;

    // Initialize canvas
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    // Store context & set styling
    const context: any = canvas.getContext("2d");
    context.font = size + "px sans-serif";
    context.textBaseline = "middle";
    context.textAlign = "center";

    if (!character) {
        document.body.style.cursor = "default";
        return;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillText(character, size / 2, size / 2);
    var imgDataURL = canvas.toDataURL();

    var offset = (size / 2) + " 0";
    document.body.style.cursor = "url(" + imgDataURL + ") " + offset + ", auto";
};
