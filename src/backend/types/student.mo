import Common "common";

module {
  public type Student = {
    id : Common.StudentId;
    name : Text;
    nameBengali : Text;
    class_ : Text;
    section : Text;
    rollNumber : Text;
    email : Text;
  };

  public type CreateStudentArgs = {
    name : Text;
    nameBengali : Text;
    class_ : Text;
    section : Text;
    rollNumber : Text;
    email : Text;
  };

  public type UpdateStudentArgs = {
    id : Common.StudentId;
    name : Text;
    nameBengali : Text;
    class_ : Text;
    section : Text;
    rollNumber : Text;
    email : Text;
  };
};
