import Common "common";

module {
  public type Teacher = {
    id : Common.TeacherId;
    name : Text;
    nameBengali : Text;
    subject : Text;
    subjectBengali : Text;
    qualification : Text;
    email : Text;
    phone : Text;
  };

  public type CreateTeacherArgs = {
    name : Text;
    nameBengali : Text;
    subject : Text;
    subjectBengali : Text;
    qualification : Text;
    email : Text;
    phone : Text;
  };

  public type UpdateTeacherArgs = {
    id : Common.TeacherId;
    name : Text;
    nameBengali : Text;
    subject : Text;
    subjectBengali : Text;
    qualification : Text;
    email : Text;
    phone : Text;
  };
};
