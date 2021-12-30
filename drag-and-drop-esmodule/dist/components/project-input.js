var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Authbind } from "../decorators/autobind.js";
import { projectState as ProjectState } from "../state/project-state.js";
import Component from "./base-component.js";
import * as Validation from "../util/validation.js";
export class ProjectInput extends Component {
    constructor() {
        super("project-input", "app", true, "user-input");
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configure();
    }
    renderContent() { }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    clearInputs() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleVaildatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionVaildatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleVaildatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5,
        };
        if (!Validation.validate(titleVaildatable) || !Validation.validate(descriptionVaildatable) || !Validation.validate(peopleVaildatable)) {
            alert("Invalid input, please try again!");
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.peopleInputElement.value);
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            ProjectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
}
__decorate([
    Authbind
], ProjectInput.prototype, "submitHandler", null);
//# sourceMappingURL=project-input.js.map