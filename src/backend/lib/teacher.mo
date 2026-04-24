import List "mo:core/List";
import TeacherTypes "../types/teacher";
import Common "../types/common";

module {
  public func createTeacher(
    teachers : List.List<TeacherTypes.Teacher>,
    nextId : Nat,
    args : TeacherTypes.CreateTeacherArgs,
  ) : TeacherTypes.Teacher {
    let teacher : TeacherTypes.Teacher = {
      id = nextId;
      name = args.name;
      nameBengali = args.nameBengali;
      subject = args.subject;
      subjectBengali = args.subjectBengali;
      qualification = args.qualification;
      email = args.email;
      phone = args.phone;
    };
    teachers.add(teacher);
    teacher;
  };

  public func updateTeacher(
    teachers : List.List<TeacherTypes.Teacher>,
    args : TeacherTypes.UpdateTeacherArgs,
  ) : Bool {
    var found = false;
    teachers.mapInPlace(
      func(t) {
        if (t.id == args.id) {
          found := true;
          {
            t with
            name = args.name;
            nameBengali = args.nameBengali;
            subject = args.subject;
            subjectBengali = args.subjectBengali;
            qualification = args.qualification;
            email = args.email;
            phone = args.phone;
          };
        } else { t };
      }
    );
    found;
  };

  public func deleteTeacher(
    teachers : List.List<TeacherTypes.Teacher>,
    id : Common.TeacherId,
  ) : Bool {
    let sizeBefore = teachers.size();
    let filtered = teachers.filter(func(t) { t.id != id });
    teachers.clear();
    teachers.append(filtered);
    teachers.size() < sizeBefore;
  };

  public func getTeachers(
    teachers : List.List<TeacherTypes.Teacher>,
  ) : [TeacherTypes.Teacher] {
    teachers.toArray();
  };

  public func seedTeachers(
    teachers : List.List<TeacherTypes.Teacher>,
    nextId : Nat,
  ) : Nat {
    let seeds : [(Text, Text, Text, Text, Text)] = [
      ("Ramesh Kumar", "রমেশ কুমার", "Mathematics", "গণিত", "M.Sc. (Mathematics), B.Ed., 15 years experience"),
      ("Priya Das", "প্রিয়া দাস", "Bengali", "বাংলা", "M.A. (Bengali), B.Ed., Gold Medalist, 12 years experience"),
      ("Suresh Mondal", "সুরেশ মণ্ডল", "English", "ইংরেজি", "M.A. (English), B.Ed., 10 years experience"),
      ("Anita Roy", "অনিতা রায়", "Science", "বিজ্ঞান", "M.Sc. (Physics), B.Ed., 8 years experience"),
      ("Bijoy Ghosh", "বিজয় ঘোষ", "Social Studies", "সমাজবিজ্ঞান", "M.A. (History), B.Ed., 14 years experience"),
    ];
    var id = nextId;
    for ((name, nameBengali, subject, subjectBengali, qualification) in seeds.values()) {
      let teacher : TeacherTypes.Teacher = {
        id;
        name;
        nameBengali;
        subject;
        subjectBengali;
        qualification;
        email = "";
        phone = "";
      };
      teachers.add(teacher);
      id += 1;
    };
    id;
  };
};
