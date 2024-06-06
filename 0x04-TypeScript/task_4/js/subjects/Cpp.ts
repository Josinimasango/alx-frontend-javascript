namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            if (this.teacher && (this.teacher as Teacher).experienceTeachingC !== undefined) {
                return `Available Teacher: ${(this.teacher as Teacher).firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
