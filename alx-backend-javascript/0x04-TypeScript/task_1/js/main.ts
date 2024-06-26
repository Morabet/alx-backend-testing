interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface ConstructorStudentClass {
  new (firstName: string, lastName: string): IStudentClass;
}

interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements IStudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return `Currently working`;
  }
  displayName() {
    return this._firstName;
  }
}

function createStudent(
  ctor: ConstructorStudentClass,
  firstName: string,
  lastName: string
): IStudentClass {
  return new ctor(firstName, lastName);
}
let st = createStudent(StudentClass, "ali", "ali");

console.log(st.workOnHomework());
