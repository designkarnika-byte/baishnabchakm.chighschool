import List "mo:core/List";
import StudentTypes "../types/student";
import Common "../types/common";

module {
  public func createStudent(
    students : List.List<StudentTypes.Student>,
    nextId : Nat,
    args : StudentTypes.CreateStudentArgs,
  ) : StudentTypes.Student {
    let student : StudentTypes.Student = {
      id = nextId;
      name = args.name;
      nameBengali = args.nameBengali;
      class_ = args.class_;
      section = args.section;
      rollNumber = args.rollNumber;
      email = args.email;
    };
    students.add(student);
    student;
  };

  public func updateStudent(
    students : List.List<StudentTypes.Student>,
    args : StudentTypes.UpdateStudentArgs,
  ) : Bool {
    var found = false;
    students.mapInPlace(
      func(s) {
        if (s.id == args.id) {
          found := true;
          {
            s with
            name = args.name;
            nameBengali = args.nameBengali;
            class_ = args.class_;
            section = args.section;
            rollNumber = args.rollNumber;
            email = args.email;
          };
        } else { s };
      }
    );
    found;
  };

  public func deleteStudent(
    students : List.List<StudentTypes.Student>,
    id : Common.StudentId,
  ) : Bool {
    let sizeBefore = students.size();
    let filtered = students.filter(func(s) { s.id != id });
    students.clear();
    students.append(filtered);
    students.size() < sizeBefore;
  };

  public func getStudents(
    students : List.List<StudentTypes.Student>,
  ) : [StudentTypes.Student] {
    students.toArray();
  };

  public func seedStudents(
    students : List.List<StudentTypes.Student>,
    nextId : Nat,
  ) : Nat {
    // 4 boys, 4 girls across classes 9-12
    let seeds : [(Text, Text, Text, Text, Text)] = [
      // Boys
      ("Arjun Chatterjee", "অর্জুন চট্টোপাধ্যায়", "9", "A", "09001"),
      ("Sourav Biswas", "সৌরভ বিশ্বাস", "10", "B", "10002"),
      ("Rahul Mondal", "রাহুল মণ্ডল", "11", "A", "11003"),
      ("Debashis Paul", "দেবাশিস পাল", "12", "B", "12004"),
      // Girls
      ("Puja Sharma", "পূজা শর্মা", "9", "B", "09005"),
      ("Rima Das", "রিমা দাস", "10", "A", "10006"),
      ("Sucheta Roy", "সুচেতা রায়", "11", "B", "11007"),
      ("Maitreyi Ghosh", "মৈত্রেয়ী ঘোষ", "12", "A", "12008"),
    ];
    var id = nextId;
    for ((name, nameBengali, class_, section, rollNumber) in seeds.values()) {
      let student : StudentTypes.Student = {
        id;
        name;
        nameBengali;
        class_;
        section;
        rollNumber;
        email = "";
      };
      students.add(student);
      id += 1;
    };
    id;
  };
};
