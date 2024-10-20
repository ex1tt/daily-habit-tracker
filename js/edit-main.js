import { handleSubmitEdit } from "./event-handler.js";
import { displayEditInformation } from "./ui-manager.js";

displayEditInformation(window.location.search);

// Submit edit button listener
document.getElementById('submit-edit-button').addEventListener('click', () => {

    handleSubmitEdit(window.location.search);

});