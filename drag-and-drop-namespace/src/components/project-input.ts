/// <reference path="base-component.ts"/>
/// <reference path="../decorators/autobind.ts"/>
/// <reference path="../util/validation.ts"/>
/// <reference path="../state/project-state.ts"/>

namespace App {
  // ProjectInput class
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
      super("project-input", "app", true, "user-input");

      this.titleInputElement = <HTMLInputElement>this.element.querySelector("#title");
      this.descriptionInputElement = <HTMLInputElement>this.element.querySelector("#description");
      this.peopleInputElement = <HTMLInputElement>this.element.querySelector("#people");

      this.configure();
    }

    renderContent(): void {}

    configure() {
      this.element.addEventListener("submit", this.submitHandler);
    }

    private clearInputs() {
      this.titleInputElement.value = "";
      this.descriptionInputElement.value = "";
      this.peopleInputElement.value = "";
    }

    private gatherUserInput(): [string, string, number] | undefined {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;

      const titleVaildatable: Validatable = {
        value: enteredTitle,
        required: true,
      };
      const descriptionVaildatable: Validatable = {
        value: enteredDescription,
        required: true,
        minLength: 5,
      };
      const peopleVaildatable: Validatable = {
        value: +enteredPeople,
        required: true,
        min: 1,
        max: 5,
      };

      if (!validate(titleVaildatable) || !validate(descriptionVaildatable) || !validate(peopleVaildatable)) {
        alert("Invalid input, please try again!");
        return;
      } else {
        return [enteredTitle, enteredDescription, +enteredPeople];
      }
    }

    @Authbind
    private submitHandler(event: Event) {
      event.preventDefault();
      console.log(this.peopleInputElement.value);
      const userInput = this.gatherUserInput();
      if (Array.isArray(userInput)) {
        const [title, desc, people] = userInput;
        projectState.addProject(title, desc, people);
        this.clearInputs();
      }
    }
  }
}
